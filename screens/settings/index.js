import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import auth from "../../auth/firebase";
import { signOut } from "firebase/auth";

const SettingsScreen = () => {
  const handleSignOut = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text>Settings</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 10,
            alignSelf: "flex-start",
            marginTop: 20,
          }}
          onPress={handleSignOut}
        >
          <Text style={{ color: "white" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
  },
});
