import { View, Text } from 'react-native'
import { useAuthStore } from '../../stores/authStore'
import { styles } from './styles'
import { MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';

const Home = () => {
  const access = useAuthStore(state => state.access)
  const hour = new Date().getHours()



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userName}>Ângelo Carnevale</Text>
        <Text style={styles.salutationMsg}>{hour <= 12 ? "Good morning" : hour <= 18 ? "Good afternoon" : "Goog night"}</Text>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.labelBalance}>Total balance</Text>
        <Text style={styles.balanceValue}>R$</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <MaterialIcons name="attach-money" size={24} color="white" />
          <Text>Fund transfer</Text>
        </View>

        <View style={styles.button}>
          <AntDesign name="plus" size={24} color="white" />
          <Text>Add money</Text>
        </View>

        <View style={styles.button}>
          <Feather name="more-horizontal" size={24} color="white" />
          <Text>More</Text>
        </View>
      </View>
    </View>
  )
}

export default Home