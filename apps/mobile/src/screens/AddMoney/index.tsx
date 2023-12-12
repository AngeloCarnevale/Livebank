import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { styles } from './styles'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../../stores/authStore'
import { IAccount } from '../../types'
import { useNavigation } from "@react-navigation/native";
import { api } from '../../services/axios'


const AddMoney = () => {
    const [value, setValue] = useState('')
    const access = useAuthStore((state) => state.access);
    const user = useAuthStore((state) => state.user)
    const [account, setAccount] = useState<IAccount>()
    const navigation = useNavigation()

    const config = {
        headers: {
            Authorization: `Bearer ${access}`,
        },
    };
    const bodyParameters = {
        "value": value,
        "account": account?.account_number
    };

    const getAccount = async () => {
        const account = await api.get(`/account/${user.id}`, config)
            .then((data) => setAccount(data.data));
    }
    useEffect(() => {
        getAccount()
    }, [])

    const addMoney = async () => {
        const deposit = api.post('/deposit/', bodyParameters, config)
            .then(() => {
                Alert.alert("Success")
                setValue("")
                navigation.goBack()
            })
            .catch(e => Alert.alert(e))
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder='Enter your amount'
                    placeholderTextColor={'white'}
                    style={styles.amountInput}
                    keyboardType='numeric'
                    onChangeText={e => setValue(e)}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.sendButton} onPress={addMoney}>
                    <Text style={styles.sendText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddMoney