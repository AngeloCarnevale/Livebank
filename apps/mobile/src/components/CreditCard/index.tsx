import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import FlipCard from 'react-native-flip-card'
import Card from '../../screens/Card'

export default function CreditCard({ card }: { card: Card }) {

  return (
    <FlipCard
      style={styles.card}
      friction={9}
      perspective={3000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
    >
      {/* Face Side */}
      <View style={styles.fronCard}>
      
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          
          <Text style={styles.cardNumber}>{card.number}</Text>
          <View style={{position: 'absolute', bottom: 0, right: 0, padding: 15}}>
            <Text style={{ color: 'white', textAlign: 'right', fontSize:10 }}>MONTH/YEAR</Text>
            <Text style={{color: 'white', textAlign: 'right'}}>{card.expiration_date}</Text>
          </View>
        </View>

      </View>
      {/* Back Side */}
      <View style={styles.backCard}>
        <Text style={{ backgroundColor: "#000", marginTop: 20, height: 30 }}></Text>
        <Text style={styles.cvv}>CVV {card.cvv}</Text>
      </View>
    </FlipCard>
  )
}