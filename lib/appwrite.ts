import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.shayan-ziaarabshahi.expo-test',
    projectId: '67aaffc90036bee3bf13',
    databaseId: '67ab0d4d0037848a8ee3',
    userCollectionId: '67ab0ddc001b1f7743b3',
    videoCollectionId: '67ab0e120028827e9644',
    storageId: '67ab109a00020cc9c417'
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email: string, password: string, username: string) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username);

        if (!newAccount) {
            throw new Error("Account creation failed");
        }

        const avatarUrl = avatars.getInitials(username);

        const userData = await signIn(email, password);

        await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        );

        return userData;
    } catch (err) {
        console.error("Error in createUser:", err);
        throw new Error(err as any);
    }
}

export const signIn = async (email: string, password: string) => {
    try {
        return await account.createEmailPasswordSession(email, password)
    } catch (err) {
        throw new Error(err as any);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if (!currentUser) throw Error;
        return currentUser.documents[0]
    } catch (err) {
        console.log(err)
    }
}