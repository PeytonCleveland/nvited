import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const BackButton = ({ navigate }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigate("Tabs")}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Ionicons
          name="arrow-back-sharp"
          size={20}
          color="black"
          style={{ marginRight: 4 }}
        />
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
