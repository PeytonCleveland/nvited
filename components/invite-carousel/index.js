import { Dimensions, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselInviteItem from "../carousel-invite-item";

export default function InviteCarousel({ data }) {
  const { width } = Dimensions.get("window");

  const settings = {
    sliderWidth: width,
    sliderHeight: 275,
    itemWidth: 200,
    data: data,
    renderItem: CarouselInviteItem,
    hasParallaxImages: true,
    activeSlideAlignment: "start",
  };

  return (
    <View style={styles.container}>
      <Carousel {...settings} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  title: {
    fontSize: 20,
  },
});
