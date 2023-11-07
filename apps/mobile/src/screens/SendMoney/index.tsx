import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function SendMoney() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.labelAccountNumber}>Enter with account number</Text>
        <TextInput style={styles.textInput} />

        <Text style={styles.amountLabel}>Enter your amount</Text>
      </View>
      <View>

      </View>
    </View>
  )
}