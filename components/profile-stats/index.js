import { Text, View, StyleSheet } from "react-native";

const ProfileStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stat.column}>
        <Text style={styles.stat}>29</Text>
        <Text style={styles.stat.label}>Invites</Text>
      </View>
      <View style={styles.stat.column}>
        <Text style={styles.stat}>1,421</Text>
        <Text style={styles.stat.label}>Followers</Text>
      </View>
      <View style={styles.stat.column}>
        <Text style={styles.stat}>830</Text>
        <Text style={styles.stat.label}>Following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  stat: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
    label: {
      fontSize: 14,
      color: "gray",
    },
    column: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

export default ProfileStats;
