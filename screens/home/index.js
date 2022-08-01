import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/header";
import SearchBar from "../../components/search-bar";
import GetGreeting from "../../utils/get-greeting";

const HomeScreen = ({ navigation: { navigate }, route }) => {
  return (
    <>
      <Header route={route} navigate={navigate} />
      <View style={styles.container}>
        <Text style={{ marginBottom: 10 }}>{GetGreeting()}</Text>
        <SearchBar />
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 50,
    paddingHorizontal: 25
  }
});

export default HomeScreen;
