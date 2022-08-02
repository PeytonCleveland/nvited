import BottomTabNavigation from "./components/bottom-tab-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login";
import MessageStack from "./components/message-stack";
import NotificationsScreen from "./screens/notifications";
import { createContext, useMemo, useState } from "react";

const Stack = createNativeStackNavigator();

const App = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState();

  const AppContext = createContext();

  const appContextValue = useMemo(
    () => ({
      authenticatedUser,
      setAuthenticatedUser
    }),
    [authenticatedUser]
  );
  return (
    <AppContext.Provider value={appContextValue}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {!authenticatedUser ? (
            <Stack.Screen name="Auth" component={LoginScreen} />
          ) : (
            <>
              <Stack.Screen name="Tabs" component={BottomTabNavigation} />
              <Stack.Screen name="MessageStack" component={MessageStack} />
              <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
