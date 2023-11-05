import { View, Text } from 'react-native'
import {styles} from './styles'
import { useAuthStore } from '../../stores/authStore'

const ProfileSettings = () => {
    const user = useAuthStore(state => state.user)
    const account = () => {

    }

  return (
    <View style={styles.container}>
      <Text style={styles.textWhite}>Agência</Text>
      <Text style={styles.textWhite}>Conta</Text>
      <Text style={styles.textWhite}>Phone number</Text>
    </View>
  )
}

export default ProfileSettings