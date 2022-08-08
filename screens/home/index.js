import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../../components/button";
import CategoryCarousel from "../../components/category-carousel";
import Header from "../../components/header";
import InviteCarousel from "../../components/invite-carousel";
import SearchBar from "../../components/search-bar";
import GetGreeting from "../../utils/get-greeting";

const data = [
  {
    title: "Coral Reef",
    description: "Location: Red Sea",
    source:
      "https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Phone",
    description: "iPhone 6 on the table",
    source:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },

  {
    title: "Old building",
    description: "Location: Germany",
    source:
      "https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Coral Reef",
    description: "Location: Red Sea",
    source:
      "https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Phone",
    description: "iPhone 6 on the table",
    source:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },

  {
    title: "Old building",
    description: "Location: Germany",
    source:
      "https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },
];

const categories = [
  {
    label: "🤿 Swimming",
  },
  {
    label: "🌲 Nature",
  },
  {
    label: "🚴‍♀️ Bicycling",
  },
  {
    label: "🛍 Shopping",
  },
  {
    label: "🎸 Music",
  },
  {
    label: "🏞 Parks",
  },
  {
    label: "🧺 Basket Weaving",
  },
];

const HomeScreen = ({ navigation: { navigate }, route }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Header navigate={navigate} />
      <View style={styles.container}>
        <Text style={{ marginBottom: 10 }}>{GetGreeting()}</Text>
        <SearchBar />
        <View style={styles.trending}>
          <Text style={styles.trending.title}>Trending Invites</Text>
          <Button
            onPress={() => alert("Haven't finished this feature yet :/")}
            label="View all"
            endIcon="arrow-forward-sharp"
          />
        </View>
        <InviteCarousel data={data} />
        <View style={styles.categories}>
          <Text style={styles.categories.title}>Browse Categories</Text>
          <Button
            onPress={() => alert("Haven't finished this feature yet :/")}
            label="View all"
            endIcon="arrow-forward-sharp"
          />
        </View>
        <CategoryCarousel data={categories} />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 50,
    paddingHorizontal: 25,
  },
  trending: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    title: {
      fontSize: 18,
    },
  },
  categories: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    title: {
      fontSize: 18,
    },
  },
});

export default HomeScreen;
