import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Button = ({ endIcon, label, onPress, variant = "empty" }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Text style={{ color: "blue" }}>{label}</Text>
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
