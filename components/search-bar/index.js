import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="gray" />
      <Text style={{ marginLeft: 10, color: "gray", fontSize: 18 }}>
        Search for open invites
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "lightgray",
    height: 40
  }
});

export default SearchBar;
