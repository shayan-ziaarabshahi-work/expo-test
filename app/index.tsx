import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <View className='p-8'>
          <Text>index</Text>
          <Link href='/profile' className='text-blue-500'>profile</Link>
        </View>
      </SafeAreaView>
    )
  }
}