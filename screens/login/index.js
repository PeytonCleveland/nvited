import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState, useRef } from "react";
import Button from "../../components/button";
import auth, { firebaseConfig } from "../../auth/firebase";
import { signInWithPhoneNumber } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

const LoginScreen = ({ navigation: { navigate } }) => {
  const [number, onChangeNumber] = useState(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [countryCode, setCountryCode] = useState("1");

  const recaptchaVerifier = useRef(null);

  const handleLogin = () => {
    const phoneNumber = `+${countryCode}${number}`;
    Keyboard.dismiss();
    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier.current)
      .then((confirmationResult) => {
        navigate("Verify", { confirmationResult });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBlur = () => {
    Keyboard.dismiss();
    setInputFocused(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleBlur} accessible={false}>
      <View style={styles.login}>
        <View style={styles.welcome}>
          <Text style={styles.welcome.title}>
            You're invited
            {"\n"} to join real life
          </Text>
        </View>
        <View
          style={
            inputFocused ? styles.container.active : styles.container.inactive
          }
        >
          <Text style={styles.title}>Login</Text>
          <Text style={styles.label}>Phone number</Text>
          <View style={styles.phoneRow}>
            <Button
              label="🇺🇸"
              style={styles.countryDropdown}
              endIcon="chevron-down-sharp"
            />
            <Text style={styles.countryCode}>+ {countryCode}</Text>
            <TextInput
              value={number}
              onChangeText={onChangeNumber}
              textContentType="telephoneNumber"
              onFocus={() => setInputFocused(true)}
              keyboardType="phone-pad"
              autoCompleteType="tel"
              style={styles.phone}
              placeholder="(334) 782-9357"
            />
          </View>
          <Button
            label="Login"
            variant="filled"
            fullWidth
            onPress={() => handleLogin()}
          />
          <Text style={styles.signUp}>Don't have an account? Sign up</Text>
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  login: {
    display: "flex",
    flex: 1,
    backgroundColor: "lightgray",
  },
  welcome: {
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 40,
    flex: 1,
    title: {
      fontSize: 40,
      marginTop: 16,
      color: "gray",
      fontWeight: "200",
    },
  },
  container: {
    active: {
      display: "flex",
      position: "relative",
      height: "62%",
      paddingHorizontal: 40,
      paddingTop: 24,
      borderRadius: 24,
      backgroundColor: "white",
    },
    inactive: {
      display: "flex",
      position: "relative",
      flex: 1,
      paddingHorizontal: 40,
      paddingTop: 24,
      borderRadius: 24,
      backgroundColor: "white",
    },
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
  },
  signUp: {
    position: "absolute",
    bottom: 44,
    alignSelf: "center",
  },
  phoneRow: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  countryDropdown: {
    marginRight: 8,
    borderEndWidth: 1,
    borderColor: "lightgray",
    paddingLeft: 16,
    paddingRight: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    label: {
      fontSize: 28,
      paddingVertical: 4,
    },
    icon: {
      color: "gray",
      size: 20,
    },
  },
  countryCode: {
    fontSize: 18,
    marginHorizontal: 8,
    alignSelf: "center",
  },
  phone: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
  },
});
