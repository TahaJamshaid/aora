import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title = "your button",
  handlePress = () => {},
  containerStyles = "",
  textStyles = "",
  activeOpacity,
  isLoading,
}) => {
  return (
    <>
      <TouchableOpacity
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
          isLoading ? "opacity-50" : ""
        }`}
        onPress={handlePress}
        activeOpacity={activeOpacity}
        disabled={isLoading}
      >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
