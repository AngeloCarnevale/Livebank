import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { styles } from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '@env'
import { useAuthStore } from '../../stores/authStore'
import { IAccount } from '../../types'
import { useNavigation } from "@react-navigation/native";


const AddMoney = () => {
    const [value, setValue] = useState('')
    const access = useAuthStore((state) => state.access);
    const user = useAuthStore((state) => state.user)
    const [account, setAccount] = useState<IAccount>()
    const navigation = useNavigation()

    console.log(API_URL)
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
        const account = await axios
            .get(API_URL + `/account/${user.id}`, config)
            .then((data) => setAccount(data.data));
    }
    useEffect(() => {
        getAccount()
    }, [])

    const addMoney = async () => {
        const deposit = axios.post(API_URL + '/deposit/', bodyParameters, config)
            .then(() => {
                Alert.alert("Success")
                setValue("")
                
            })
            .catch(e => Alert.alert(e))
    }

    return (
        <View style={styles.container}>
            <View>

            </View>
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