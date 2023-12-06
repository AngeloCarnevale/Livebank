import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react'
import { styles } from './styles'
import { api } from '../../services/axios';
import { useAuthStore } from '../../stores/authStore'

export default function SendMoney() {
  const user = useAuthStore((state) => state.user);
  const access = useAuthStore((state) => state.access);
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const navigation = useNavigation()
  
  const config = {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  };
  const bodyParameters = {
    "recipient": recipient,
    "value": amount,
    "sender": user.id
  };

  const sendMoney = async () => {
    const transaction = await api.post('/transaction/', bodyParameters, config)
    .then(()=> {
      Alert.alert("Success")
      navigation.goBack()
    }).catch(() => Alert.alert("You do not have enough balance"))
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.labelAccountNumber}>Enter with account number</Text>
        <TextInput style={styles.textInput} onChangeText={(e) => setRecipient(e)} placeholder='Example: 1'/>
      </View>
      <View style={styles.mid}>
        <Text style={styles.amountLabel}>Enter with amount</Text>
        <TextInput 
          placeholder='R$' 
          placeholderTextColor={'white'}
          style={styles.amountInput}
          onChangeText={(e)=> setAmount(e)}
          keyboardType='numeric'
        />
      </View>
      <View>
        <TouchableOpacity style={styles.sendButton} onPress={sendMoney}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}