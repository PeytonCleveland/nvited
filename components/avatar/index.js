import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Avatar = ({ navigate }) => {
  return (
    <View style={styles.avatar}>
      <TouchableOpacity onPress={() => navigate("Profile")}>
        <Text style={{ color: "white" }}>PC</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    display: "flex",
    width: 36,
    height: 36,
    borderRadius: "100%",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Avatar;
