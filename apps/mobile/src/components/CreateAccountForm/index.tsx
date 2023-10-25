import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Props } from '../../types'


export default function CreateAccountForm({navigation}: Props) {

    


    return (
        <View style={styles.container}>
            <View style={styles.blockContainer}>
                <View style={styles.block}>
                    <Text style={styles.label}>Full name</Text>
                    <TextInput style={styles.textInput} />
                </View>

                <View style={styles.block}>
                    <Text style={styles.label}>Phone number</Text>
                    <TextInput style={styles.textInput} />
                </View>

                <View style={styles.block}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.textInput} />
                </View>

                <View style={styles.block}>
                    <Text style={styles.label}>Repeat password</Text>
                    <TextInput style={styles.textInput} />
                </View>

            </View>


            <View style={styles.bottom}>
                <TouchableOpacity style={styles.buttonCreateAccount}>
                    <Text style={styles.textButton}>CREATE YOUR ACCOUNT</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate("login")}>
                        <Text style={styles.textBottom}>Do you already have a Livebank account? <Text style={styles.spanText}>Sign in here</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}