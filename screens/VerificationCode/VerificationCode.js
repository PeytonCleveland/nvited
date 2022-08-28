import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import Button from "../../components/button";

const VerificationCodeScreen = ({ route }) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [verificationCode, setVerificationCode] = useState(null);

  const { confirmationResult } = route.params;
  console.log(confirmationResult);

  const handleConfirmCode = () => {
    confirmationResult.confirm(verificationCode).catch((error) => {
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
            Check your messages for the verification code.
          </Text>
        </View>
        <View
          style={
            inputFocused ? styles.container.active : styles.container.inactive
          }
        >
          <Text style={styles.title}>Verification Code</Text>
          <Text style={styles.label}>6 digit code</Text>
          <View style={styles.phoneRow}>
            <TextInput
              value={verificationCode}
              onChangeText={setVerificationCode}
              style={styles.phoneNumber}
              onFocus={() => setInputFocused(true)}
              onBlur={handleBlur}
              keyboardType="number-pad"
              placeholder="123456"
              textContentType="oneTimeCode"
            />
          </View>
          <Button
            label="Login"
            variant="filled"
            fullWidth
            onPress={() => handleConfirmCode()}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VerificationCodeScreen;

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
