import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from "../../screens/messages";
import NewMessageScreen from "../../screens/new-message";

import Button from "../button";

const Stack = createNativeStackNavigator();

const MessageStack = ({ navigation: { navigate } }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Button
              endIcon="chevron-back-sharp"
              onPress={() => navigate("Home")}
            />
          ),
          headerTintColor: "lightgray",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 16,
            color: "#222",
          },
        }}
      />
      <Stack.Screen
        name="New Message"
        component={NewMessageScreen}
        options={{
          headerBackTitleVisible: false,
          headerRight: () => (
            <Button onPress={() => alert("I don't work yet :/")} label="Chat" />
          ),
          headerTintColor: "lightgray",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 16,
            color: "#222",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MessageStack;
