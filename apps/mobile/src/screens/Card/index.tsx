import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { api } from "../../services/axios";
import CreditCard from "../../components/CreditCard";
import {useState} from 'react'


const Card = () => {
  const [card, setCard] = useState('')

  const getCard = async () => {
    const response = await api.get('/card/')
    setCard(response.data)
  }
  getCard()
  console.log(card)
  return (
    <View style={styles.container}>
        <CreditCard />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request card</Text>
        </TouchableOpacity>
    </View>
    );
};

export default Card;
