import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { useState } from "react";
import Button from "../../components/button";

const LoginScreen = () => {
  const [number, onChangeNumber] = useState(null);

  const handleLogin = () => {
    Keyboard.dismiss();
    alert("Logging in...");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.label}>Phone number</Text>
        <TextInput
          value={number}
          onChangeText={onChangeNumber}
          textContentType="telephoneNumber"
          keyboardType="numeric"
          style={styles.phone}
          placeholder="334-782-9357"
        />
        <Button
          label="Login"
          variant="filled"
          fullWidth
          onPress={handleLogin}
        />
        <Text style={styles.signUp}>Don't have an account? Sign up</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24
  },
  label: {
    fontSize: 14
  },
  signUp: {
    position: "absolute",
    bottom: 44,
    alignSelf: "center"
  },
  phone: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 22,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    marginVertical: 8
  }
});
