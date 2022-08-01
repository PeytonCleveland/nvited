import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/home";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProfileScreen from "../../screens/profile";
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "apps-sharp" : "apps-sharp";
          } else if (route.name === "Discover") {
            iconName = focused ? "globe-sharp" : "globe-sharp";
          } else if (route.name === "Activity") {
            iconName = focused ? "flash-sharp" : "flash-sharp";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-sharp" : "person-sharp";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          height: 95,
          paddingBottom: 35,
          paddingTop: 8
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={HomeScreen} />
      <Tab.Screen name="Activity" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
