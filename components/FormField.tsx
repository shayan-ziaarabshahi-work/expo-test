import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import {} from "react-native-gesture-handler";
import { icons } from "@/constants";
import { useController, useFormContext } from "react-hook-form";

const FormField = ({
  name,
  label,
  rules,
  defaultValue,
  placeholder,
  otherStyles,
  ...props
}: any) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control, rules, defaultValue });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{name}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl items-center flex-row focus:border-black">
        <TextInput
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          className="flex-1 text-white font-psemibold text-base"
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={name === "password" && !showPassword}
        />
        {name === "password" ? (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              resizeMode="contain"
              source={showPassword ? icons.eyeHide : icons.eye}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default FormField;
