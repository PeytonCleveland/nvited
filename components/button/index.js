import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Button = ({
  endIcon,
  fullWidth = false,
  label,
  onPress,
  variant = "empty"
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: fullWidth ? "100%" : null,
          backgroundColor: variant === "filled" ? "blue" : null,
          borderRadius: 8
        }}
      >
        <Text
          style={{
            color: variant === "filled" ? "white" : "blue",
            paddingVertical: 8,
            fontSize: variant === "filled" ? 18 : 14,
            fontWeight: "700"
          }}
        >
          {label}
        </Text>
        {endIcon && (
          <Ionicons
            name={endIcon}
            size={16}
            color="blue"
            style={{ marginLeft: 4 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
