import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Button = ({
  endIcon,
  fullWidth = false,
  label,
  onPress,
  style,
  variant = "empty"
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={
          style ?? {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: fullWidth ? "100%" : null,
            backgroundColor: variant === "filled" ? "gray" : null,
            borderRadius: 8
          }
        }
      >
        <Text
          style={
            style?.label ?? {
              color: variant === "filled" ? "white" : "blue",
              paddingVertical: 10,
              fontSize: variant === "filled" ? 18 : 14,
              fontWeight: "700"
            }
          }
        >
          {label}
        </Text>
        {endIcon && (
          <Ionicons
            name={endIcon}
            size={style?.icon?.size ?? 16}
            color={style?.icon?.color ?? "blue"}
            style={{ marginLeft: 4 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
