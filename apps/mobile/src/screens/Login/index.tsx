import { View, Text, StatusBar } from "react-native";
import { styles } from "./styles";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.createAccount}>Sign into your account</Text>
        <Text style={styles.smallText}>Log into your Livebank account</Text>
      </View>

      <LoginForm />
    </View>
  );
};

export default Login;
