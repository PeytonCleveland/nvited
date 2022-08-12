import { Dimensions, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CategoryCarouselItem from "../category-carousel-item";

export default function CategoryCarousel({ data }) {
  const { width } = Dimensions.get("window");

  const settings = {
    sliderWidth: width,
    sliderHeight: 85,
    itemWidth: 95,
    data: data,
    renderItem: CategoryCarouselItem,
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
    paddingTop: 8,
  },
});
