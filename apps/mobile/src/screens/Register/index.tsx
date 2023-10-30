import { View, Text } from "react-native";
import { styles } from "./styles";
import CreateAccountForm from "../../components/CreateAccountForm";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.createAccount}>Create Account</Text>
        <Text style={styles.smallText}>
          Open a Livebank account with a few details
        </Text>
      </View>

      <CreateAccountForm />
    </View>
  );
}
