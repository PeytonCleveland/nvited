import { Image, View, StyleSheet } from "react-native";

const ProfileImage = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg",
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    borderRadius: 16,
    marginRight: 20,
  },
});

export default ProfileImage;
