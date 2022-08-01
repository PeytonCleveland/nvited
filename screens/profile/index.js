import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/header";

const ProfileScreen = ({ navigation: { goBack, navigate }, route }) => {
  return (
    <>
      <Header goBack={goBack} route={route} navigate={navigate} />
      <View style={styles.container}>
        <Text>Profile</Text>
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

export default ProfileScreen;
