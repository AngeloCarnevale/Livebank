import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { api } from '../../services/axios'
import { useState } from 'react'
import { useAuthStore } from '../../stores/authStore'

export default function Loan() {
  const [value, setValue] = useState('')
  const [valueFees, setValueFees] = useState('')
  const [fee, setFee] = useState(0)
  const {user} = useAuthStore()

  const requestLoan = async () => {
    await api.post('/loan/', {
      "value": value,
      "value_fees": valueFees,
      "fee": fee,
      "expiration": "",
      "condition": "",
      "account": user.id

    })
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.labelInput}>What's the loan value?</Text>
        <TextInput style={styles.valueInput} placeholder='R$ XXXX' placeholderTextColor='gray' />
      </View>

      <View>
        <Text style={styles.labelInput}>How many installments fit in your pocket?</Text>
        <TextInput style={styles.valueInput} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestText}>Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}