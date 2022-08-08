import {
  Button,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const NewMessageScreen = ({ navigation: { navigate }, route }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.search}>
            <Ionicons name="search-sharp" size={24} color="black" />
            <TextInput
              placeholder="Search for users"
              style={styles.search.input}
            />
          </View>
          <View style={styles.suggested.container}>
            <Text style={styles.suggested.title}>Suggested users</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    backgroundColor: "lightgray",
    width: "100%",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 8,
    input: {
      flex: 1,
      paddingHorizontal: 12,
      fontSize: 16,
    },
  },
  suggested: {
    container: {
      display: "flex",
      width: "100%",
      marginBottom: 25,
    },
    title: {
      fontSize: 20,
      fontWeight: "700",
      marginBottom: 10,
    },
  },
});

export default NewMessageScreen;
