import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const ActivityScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Activity Feed</Text>
      </View>
    </SafeAreaView>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
});
