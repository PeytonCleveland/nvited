import { View } from "react-native";
import React, { useEffect } from "react";

const PostScreen = ({ navigation: { navigate } }) => {
  useEffect(() => {
    navigate("CreatePost");
  }, []);

  return <View style={{ flex: 1 }} />;
};

export default PostScreen;
