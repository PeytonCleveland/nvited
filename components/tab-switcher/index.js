import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react";

const TabSwitcher = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.switcher}>
      <TouchableOpacity
        style={selectedTab === 0 ? styles.tab.active : styles.tab.inactive}
        onPress={() => setSelectedTab(0)}
      >
        <Text>Invites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={selectedTab === 1 ? styles.tab.active : styles.tab.inactive}
        onPress={() => setSelectedTab(1)}
      >
        <Text>Activity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  switcher: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee",
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 6,
    marginBottom: 12,
  },
  tab: {
    active: {
      display: "flex",
      width: "49%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 6,
      backgroundColor: "white",
      borderRadius: 6,
    },
    inactive: {
      display: "flex",
      width: "49%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 6,
    },
  },
});

export default TabSwitcher;
