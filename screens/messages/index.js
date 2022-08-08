import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const MessagesScreen = ({ navigation: { navigate }, route }) => {
  const messages = [];
  return (
    <>
      {messages.length > 0 ? (
        <View style={styles.container}>
          <Text style={{ marginBottom: 10, fontSize: 24, fontWeight: "700" }}>
            Direct Messages
          </Text>
          <StatusBar style="auto" />
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Ionicons
            name="file-tray-stacked-sharp"
            size={96}
            color="lightgray"
            style={{ marginBottom: 28 }}
          />
          <Text style={styles.emptyMessage.title}>Your inbox is empty</Text>
          <Text style={styles.emptyMessage.subtitle}>
            You don't have any direct messages to display yet.
          </Text>
          <Button
            title="Start a message"
            onPress={() => navigate("New Message")}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  emptyState: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyMessage: {
    title: {
      fontSize: 26,
      fontWeight: "700",
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      textAlign: "center",
      paddingHorizontal: 14,
      marginBottom: 6,
    },
  },
});

export default MessagesScreen;
