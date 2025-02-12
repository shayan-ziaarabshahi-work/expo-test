import { ScrollView, View, Image, Text, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { FormProvider, useForm } from "react-hook-form";
import { Link, router } from "expo-router";
import { createUser } from '../../lib/appwrite'
import { useDispatch } from "react-redux";
import { logInAction, userAction } from "@/redux/slices/mainSlice";

const SignUp = () => {
  const methods = useForm();

  const dispatch = useDispatch()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (data: any) => {
    setIsSubmitting(true)
    try {
      const res = createUser(data.email, data.password, data.username)   
      console.log(res)
      dispatch(userAction(res));
      dispatch(logInAction(true));
      router.replace('/home')
    } catch(err) {
      Alert.alert('Error', 'Something went wrong!')
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign up to Aora
          </Text>
          <FormProvider {...methods}>
            <FormField
              name="username"
              label="Username"
              rules={{ required: { value: true, message: 'This field is required.' } }}
              otherStyles="mt-7"
            />
            <FormField
              name="email"
              label="Email"
              rules={{ required: { value: true, message: 'This field is required.' } }}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField
              name="password"
              label="Password"
              rules={{ required: { value: true, message: 'This field is required.' } }}
              otherStyles="mt-7"
            />
            <CustomButton
              title="Sign Up"
              containerStyles="mt-8"
              handlePress={methods.handleSubmit(onSubmit)}
              isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Already have an account?
              </Text>
              <Link href='/sign-in' className="text-lg font-psemibold text-secondary">Sign In</Link>
            </View>
          </FormProvider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;