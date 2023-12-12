import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { styles } from './styles'
import { api } from '../../services/axios'
import { useState } from 'react'
import { useAuthStore } from '../../stores/authStore'
import { useNavigation } from "@react-navigation/native";

export default function Loan() {
  const [value, setValue] = useState('')
  const [valueFees, setValueFees] = useState('')
  const [fee, setFee] = useState(0)
  const navigation = useNavigation()
  const {user} = useAuthStore()

  const requestLoan = async () => {
    const response = await api.post('/loan/', {
      "value": value,
      "value_fees": valueFees,
      "fee": fee,
      "expiration": '2023-12-12',
      "condition": "W",
      "account": user.id
    }).then(data => {
      Alert.alert("Success", data.data)
      navigation.goBack()
      setFee(0)
      setValue("")
      setValueFees("")
    }).catch(error => Alert.alert("Error", error))
    
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.labelInput}>What's the loan value?</Text>
        <TextInput style={styles.valueInput} placeholder='R$ XXXX' placeholderTextColor='gray'onChangeText={(e) => setValue(e)}/>
      </View>

      <View>
        <Text style={styles.labelInput}>How many installments fit in your pocket?</Text>
        <TextInput style={styles.valueInput} onChangeText={e => setFee(Number(e))}/>
      </View>

      <View>
        <Text style={styles.labelInput}>What is the value of the installments?</Text>
        <TextInput style={styles.valueInput} onChangeText={e => setValueFees(e)}/>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.requestButton} onPress={requestLoan}>
          <Text style={styles.requestText}>Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}