import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Props } from "../../types";

export default function Welcome({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>

      <View style={styles.messageContainer}>
        <Text style={styles.welcomeMessage}>Welcome to Livebank</Text>
        <Text style={styles.smallText}>The bank for everyone.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.buttonText}>CREATE YOUR FREE ACCOUNT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.buttonText}>LOGIN INTO YOUR ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
