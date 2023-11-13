import { View, Text } from 'react-native'
import { styles } from './styles'
import type { TransationBlockProps } from '../../types'


export default function TransactionBlock({ value, created_at }: TransationBlockProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{value}</Text>
            <Text style={styles.text}>{created_at}</Text>
        </View>
    )
}
