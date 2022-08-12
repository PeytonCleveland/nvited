import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProfileImage from "../../components/profile-image";
import ProfileStats from "../../components/profile-stats";
import TabSwitcher from "../../components/tab-switcher";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileScreen = ({ navigation: { goBack, navigate }, route }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profile.imageRow}>
            <ProfileImage />
            <View style={{ display: "flex", flex: 1 }}>
              <ProfileStats />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity style={styles.profile.edit}>
                  <Text>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profile.settings}
                  onPress={() => navigate("Settings")}
                >
                  <Ionicons name={"settings-sharp"} size={16} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.profile.name}>Peyton Cleveland</Text>
          <Text style={styles.profile.bio}>Bio text goes here</Text>
          <TabSwitcher />
          <Text style={styles.profile.tab.header}>Happening Now</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  profile: {
    display: "flex",
    paddingHorizontal: 25,
    paddingVertical: 32,
    edit: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      flexDirection: "row",
      backgroundColor: "lightgray",
      paddingVertical: 6,
      borderRadius: 6,
      marginRight: 6,
    },
    settings: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 38,
      height: 35,
      flexDirection: "row",
      backgroundColor: "lightgray",
      paddingVertical: 6,
      borderRadius: 6,
    },
    imageRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 25,
    },
    name: {
      fontSize: 24,
      fontWeight: "700",
      marginBottom: 4,
    },
    bio: {
      fontSize: 16,
      marginBottom: 25,
    },
    tab: {
      header: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
      },
    },
  },
});

export default ProfileScreen;
