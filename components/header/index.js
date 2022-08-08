import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Avatar from "../avatar";
import BackButton from "../back-button";

const Header = ({ navigate }) => {
  const hideHeaderScreens = ["Messages", "Notifications"];

  return (
    <View style={styles.container}>
      <Text>Nvited v0.1.0</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => navigate("MessageStack")}>
          <Ionicons
            name="paper-plane-sharp"
            size={28}
            color="gray"
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
        <Avatar navigate={navigate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingTop: 18,
    backgroundColor: "white",
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
