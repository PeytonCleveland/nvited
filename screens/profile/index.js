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

const ProfileScreen = ({ navigation: { goBack, navigate }, route }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profile.imageRow}>
            <ProfileImage />
            <View style={{ display: "flex", flex: 1 }}>
              <ProfileStats />
              <TouchableOpacity style={styles.profile.edit}>
                <Text>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.profile.name}>Peyton Cleveland</Text>
          <Text style={styles.profile.bio}>Bio text goes here</Text>
          <TabSwitcher />
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
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
  },
});

export default ProfileScreen;
