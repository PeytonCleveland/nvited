import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/home";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProfileScreen from "../../screens/profile";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const emptyScreen = () => <View style={{ flex: 1 }} />;

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "apps-sharp" : "apps-sharp";
          } else if (route.name === "Discover") {
            iconName = focused ? "earth-sharp" : "earth-sharp";
          } else if (route.name === "PostStack") {
            iconName = focused ? "add-circle-sharp" : "add-circle-sharp";
            size = 64;
            color = "black";
          } else if (route.name === "Activity") {
            iconName = focused ? "flash-sharp" : "flash-sharp";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-sharp" : "person-sharp";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          height: 100,
          paddingBottom: 24,
          paddingTop: 6,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={HomeScreen} />
      <Tab.Screen name="Post" component={emptyScreen} />
      <Tab.Screen name="Activity" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
