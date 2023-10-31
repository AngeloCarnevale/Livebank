import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { API_URI } from "@env";
import axios from "axios";
import { NavigationProp } from "../../types";
import { useAuthStore } from "../../stores/authStore";


export default function LoginForm() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setAccess = useAuthStore(state => state.setAccess)

  async function signUser() {
    const user = await axios
      .post(API_URI + "/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        Alert.alert("Login success")
        setAccess(response.data.access)
        navigation.navigate("tabRoutes")
      })
      .catch((e) => {
        console.log(e);
        Alert.alert("Login Error");
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.blockContainer}>
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
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.buttonLogin} onPress={signUser}>
          <Text style={styles.textButton}>LOG IN</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={styles.textBottom}>
              Do you not have a Livebank account?{" "}
              <Text style={styles.spanText}>Sign up here</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
