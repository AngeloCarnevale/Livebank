import { View, Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'



export default function Welcomet({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>

      <View style={styles.messageContainer}>
        <Text style={styles.welcomeMessage}>Welcome to Livebank</Text>
        <Text style={styles.smallText}>The bank for everyone.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={()=> navigation.navigate("register")}>
            <Text style={styles.buttonText}>CREATE YOUR FREE ACCOUNT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>LOGIN INTO YOUT ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
