import BottomTabNavigation from "./components/bottom-tab-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageStack from "./components/message-stack";
import NotificationsScreen from "./screens/notifications";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Tabs" component={BottomTabNavigation} />
        <Stack.Screen name="MessageStack" component={MessageStack} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
