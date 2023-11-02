import { View, Text } from 'react-native'
import { useEffect } from 'react'
import { useAuthStore } from '../../stores/authStore'
import { styles } from './styles'
import { MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import axios from 'axios';
import { API_URI } from '@env';

const Home = () => {
  const access = useAuthStore(state => state.access)
  const setUser = useAuthStore(state => state.setUser)
  const user = useAuthStore(state => state.user)
  const hour = new Date().getHours()
  console.log(API_URI)
  
  const config ={
    headers: {Authorization: `Bearer ${access}`}
  }
  const bodyParameters = {
    key: "value"
 };

  const setUserInfos = async () => {
    const user = await axios.post(API_URI+'/auth/get/', 
    bodyParameters,
    config)
    .then(data => setUser(data.data))
  }

  useEffect(() => {
    setUserInfos()
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.salutationMsg}>{hour <= 12 ? "Good morning" : hour <= 18 ? "Good afternoon" : "Goog night"}</Text>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.labelBalance}>Total balance</Text>
        <Text style={styles.balanceValue}>R$</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View>
          <View style={styles.button}>
            <MaterialIcons name="attach-money" size={30} color="white" style={styles.iconButton} />
            <Text style={styles.buttonText}>Fund transfer</Text>
          </View>
        </View>

        <View style={styles.button}>
          <AntDesign name="plus" size={30} color="white" style={styles.iconButton} />
          <Text style={styles.buttonText}>Add money</Text>
        </View>

        <View style={styles.button}>
          <Feather name="more-horizontal" size={30} color="white" style={styles.iconButton} />
          <Text style={styles.buttonText}>More</Text>
        </View>
      </View>
    </View>
  )
}

export default Home