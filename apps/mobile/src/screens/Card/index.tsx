import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { api } from "../../services/axios";
import { useState, useEffect } from 'react'
import { useAuthStore } from "../../stores/authStore";
import CreditCard from "../../components/CreditCard";

type Card = {
  number: string;
  client: number;
  created_at: Date;
  cvv: string;
  state: string;
  expiration_date: string;
}

const Card = () => {
  const [card, setCard] = useState<Card | null>(null)
  const [data, setData] = useState()
  const { user } = useAuthStore()

  const getCard = async () => {
    const { data } = await api.get('/card/')
    setCard(data[0])
  }

  const postCard = async () => {
    const response = await api.post('/card/', {
      number: "string",
      cvv: "str",
      expiration_date: "strin",
      state: "B",
      client: user.id
    })
    setCard(response.data)
  }

  useEffect(() => {
    getCard()
  }, [])

  return (
    <View style={styles.container}>
      {card && (
        <View style={styles.cardContainer}>
          <CreditCard card={card}/>
        </View>
      )
      }

      {!card && (
        <TouchableOpacity style={styles.button} onPress={postCard}>
          <Text style={styles.buttonText}>Request card</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Card;
