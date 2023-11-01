import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { API_URL } from "@env";
import axios from "axios";
import { NavigationProp } from "../../types";

export default function CreateAccountForm() {
  const navigation = useNavigation<NavigationProp>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPasswod, setRepeatPassword] = useState("");

  async function signUpUser() {
    if (password != repeatPasswod) {
      Alert.alert("Password don't match, try again");
    }
    const user = await axios
      .post(API_URL + "/auth/register/", {
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        Alert.alert("Success to create your account");
        setName("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        navigation.navigate("login");
      })
      .catch((e) => {
        console.log(e)
        console.log(API_URL)
        e.response.status == 400
          ? Alert.alert("Fill in the fields correctly")
          : Alert.alert("Internal server error");
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.blockContainer}>
        <View style={styles.block}>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(e) => setName(e)}
            value={name}
          />
        </View>

        <View style={styles.block}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(e) => setEmail(e)}
            value={email}
          />
        </View>

        <View style={styles.block}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(e) => setPassword(e)}
            secureTextEntry
            value={password}
          />
        </View>

        <View style={styles.block}>
          <Text style={styles.label}>Repeat password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(e) => setRepeatPassword(e)}
            secureTextEntry
            value={repeatPasswod}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.buttonCreateAccount}
          onPress={signUpUser}
        >
          <Text style={styles.textButton}>CREATE YOUR ACCOUNT</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={styles.textBottom}>
              Do you already have a Livebank account?{" "}
              <Text style={styles.spanText}>Sign in here</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
