import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/header";

const NotificationsScreen = ({ navigation: { navigate }, route }) => {
  return (
    <>
      <Header route={route} navigate={navigate} />
      <View style={styles.container}>
        <Text>Notifications</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default NotificationsScreen;
