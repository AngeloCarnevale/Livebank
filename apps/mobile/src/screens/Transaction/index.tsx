import { View, Text } from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from 'react'
import axios, { all } from "axios";
import { API_URL } from "@env";
import { useAuthStore } from "../../stores/authStore";
import { IAccount } from "../../types";

const Transaction = () => {
  const access = useAuthStore((state) => state.access)
  const [allTransactions, setAllTransactions] = useState([])
  const config = {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  };

  const transactions = async () => {
    const transactions = await axios.get(API_URL + '/transaction/', config)
      .then(data => setAllTransactions(data.data))
      .catch(e => console.log(e))
  }

  useEffect(()=> {
    transactions()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>{ }</Text>
      <View>
        
      </View>
    </View>
  );
};

export default Transaction;
