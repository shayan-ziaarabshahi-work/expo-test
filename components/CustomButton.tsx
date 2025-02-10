import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      onPress={handlePress}
      className={`bg-secondary min-h-[62px] justify-center items-center rounded-xl ${containerStyles} ${isLoading ? 'opacity-50':''}`}
    >
      <Text className={`text-primary text-semibold font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
