import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text>Settings</Text>
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
