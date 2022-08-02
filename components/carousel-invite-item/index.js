import { ParallaxImage } from "react-native-snap-carousel";
import { Platform, Pressable, SafeAreaView, StyleSheet } from "react-native";

const CarouselInviteItem = ({ item }, parallaxProps) => {
  return (
    <Pressable onPress={() => alert("Image description:" + item.description)}>
      <SafeAreaView style={styles.item}>
        <ParallaxImage
          source={{ uri: item.source }} /* the source of the image */
          containerStyle={styles.imageContainer}
          style={styles.image}
          {...parallaxProps} /* pass in the necessary props */
        />
      </SafeAreaView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 275
  },
  imageContainer: {
    flex: 1,
    borderRadius: 12,
    marginBottom: Platform.select({ ios: 0, android: 1 }) //handle rendering bug.
  },
  image: {
    resizeMode: "cover"
  }
});

export default CarouselInviteItem;
