import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const NewMessageScreen = ({ navigation: { navigate }, route }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.controls}>
          <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "700" }}>
            New message
          </Text>
          <TouchableOpacity
            onPress={() => navigate("Messages")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Ionicons
              name="close-circle-sharp"
              size={36}
              color="red"
              style={{ marginBottom: 6 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 25
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default NewMessageScreen;
