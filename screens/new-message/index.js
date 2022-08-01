import { Button, StyleSheet, Text, View } from "react-native";

const NewMessageScreen = ({ navigation: { navigate }, route }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ marginBottom: 10, fontSize: 24, fontWeight: "700" }}>
          Send a new message
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 25
  },
  emptyState: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyMessage: {
    title: {
      fontSize: 26,
      fontWeight: "700",
      marginBottom: 6
    },
    subtitle: {
      fontSize: 16,
      textAlign: "center",
      paddingHorizontal: 14
    }
  }
});

export default NewMessageScreen;
