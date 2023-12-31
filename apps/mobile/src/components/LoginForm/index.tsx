import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { api } from "../../services/axios";
import { NavigationProp } from "../../types";
import { useAuthStore } from "../../stores/authStore";

export default function LoginForm() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const setAccess = useAuthStore((state) => state.setAccess);

  async function signUser() {
    setLoading(true)
    const user = await api
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        Alert.alert("Login success");
        setAccess(response.data.access);
        setEmail("");
        setPassword("");
        navigation.navigate("tabRoutes");
      })
      .catch((e) => {
        
        if(String(e).includes("429")) {
          Alert.alert("Login attempt limit exceeded, please try again in a few seconds")
          return null
        }
        console.log(e);
        Alert.alert("Login Error");
      });
    setLoading(false)
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
        {loading ? <ActivityIndicator color={'#FFE071'} size={'large'}/> :
          <TouchableOpacity style={styles.buttonLogin} onPress={signUser}>
            <Text style={styles.textButton}>LOG IN</Text>
          </TouchableOpacity>}
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
