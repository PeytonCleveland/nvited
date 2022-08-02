import { Pressable, StyleSheet, Text } from "react-native";

const CategoryCarouselItem = ({ item }) => {
  return (
    <Pressable
      onPress={() => alert("Image description:" + item.description)}
      style={styles.item}
    >
      <Text>{item.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "98%",
    height: 36,
    backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%"
  }
});

export default CategoryCarouselItem;
