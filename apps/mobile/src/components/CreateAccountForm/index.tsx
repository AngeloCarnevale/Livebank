import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function CreateAccountForm() {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.label}>Full name</Text>
                    <TextInput style={styles.textInput} />
                </View>

                <View>
                    <Text style={styles.label}>Phone number</Text>
                    <TextInput style={styles.textInput} />
                </View>

                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.textInput} />
                </View>

                <View>
                    <Text style={styles.label}>Repeat password</Text>
                    <TextInput style={styles.textInput} />
                </View>

            </View>


            <View>
                <TouchableOpacity style={styles.buttonCreateAccount}>
                    <Text>CREATE YOUR ACCOUNT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}