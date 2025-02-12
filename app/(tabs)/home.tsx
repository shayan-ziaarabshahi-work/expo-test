import { Text, FlatList, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'


const Home = () => {
  return (
    <SafeAreaView className='bg-primary'>
      <FlatList
        data={[{ $id: 1 }]}
        keyExtractor={(item: any) => item.$id}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='font-semibold text-2xl mb-6 text-white'>
                  JSMastery
                </Text>
              </View>
              <View className='mt-1.5'>
                <Image 
                  source={images.logoSmall}
                  className='w-9 h-10'
                  resizeMode='contain'
                />
              </View>
            </View> 
          </View>
        )}
        renderItem={({ item }) =>
          <Text
            key={item.$id}
            className='text-3xl text-white'
          >{item.$id}</Text>}
      />
    </SafeAreaView>
  )
}

export default Home