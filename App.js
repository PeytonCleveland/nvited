import BottomTabNavigation from "./components/bottom-tab-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./screens/create-post";
import LoginScreen from "./screens/login";
import MessageStack from "./components/message-stack";
import NotificationsScreen from "./screens/notifications";
import SettingsScreen from "./screens/settings";
import VerificationCodeScreen from "./screens/VerificationCode";
import { createContext, useMemo, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./auth/firebase";

const Stack = createNativeStackNavigator();
export const AppContext = createContext();

const App = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState();

  const appContextValue = useMemo(
    () => ({
      authenticatedUser,
      setAuthenticatedUser,
    }),
    [authenticatedUser]
  );

  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      setAuthenticatedUser(user);
    } else {
      setAuthenticatedUser(null);
    }
  });

  return (
    <AppContext.Provider value={appContextValue}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!authenticatedUser ? (
            <>
              <Stack.Screen name="Auth" component={LoginScreen} />
              <Stack.Screen name="Verify" component={VerificationCodeScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Tabs" component={BottomTabNavigation} />
              <Stack.Screen
                options={{ gestureEnabled: false }}
                name="CreatePost"
                component={CreatePostScreen}
              />
              <Stack.Screen name="MessageStack" component={MessageStack} />
              <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
              />
              <Stack.Screen name="Settings" component={SettingsScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
