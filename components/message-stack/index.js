import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from "../../screens/messages";
import NewMessageScreen from "../../screens/new-message";

const Stack = createNativeStackNavigator();

const MessageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Messages" component={MessagesScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="New Message" component={NewMessageScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MessageStack;
