import { Text, TouchableOpacity, View } from "react-native";

const BackButton = ({ navigate }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigate("Tabs")}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
