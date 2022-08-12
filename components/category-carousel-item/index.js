import { Pressable, StyleSheet, Text } from "react-native";

const CategoryCarouselItem = ({ item }) => {
  return (
    <Pressable
      onPress={() => alert("Image description:" + item.description)}
      style={styles.item}
    >
      <Text style={styles.item.label}>{item.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 85,
    height: 85,
    backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    label: {
      fontSize: 12,
    },
  },
});

export default CategoryCarouselItem;
