import { ScrollView, View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { FormProvider, useForm } from "react-hook-form";

const SignIn = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
            Log in to Aora
          </Text>
          <FormProvider {...methods}>
            <FormField
              name="email"
              label="Email"
              rules={{ required: true }}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField
              name="password"
              label="Password"
              rules={{ required: true }}
              otherStyles="mt-7"
            />
            <CustomButton
              title="Sign In"
              containerStyles="mt-8"
              handlePress={methods.handleSubmit(onSubmit)}
            />
          </FormProvider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
