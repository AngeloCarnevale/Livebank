import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from 'react'
import axios from "axios";
import { API_URL } from "@env";
import { useAuthStore } from "../../stores/authStore";
import TransactionBlock from "../../components/TransactionBlock";
import type { TransationBlockProps } from "../../types";
import { api } from "../../services/axios";

const Transaction = () => {
  const [allTransactions, setAllTransactions] = useState<TransationBlockProps[]>([])

  const transactions = async () => {
    const transactions = await api.get('/transaction/')
      .then(data => setAllTransactions(data.data))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    transactions()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={()=> <Text>  </Text>}
        data={allTransactions}
        renderItem={({ item }) => <TransactionBlock created_at={item.created_at} value={item.value} />}
        keyExtractor={item => item.created_at}
      >
      </FlatList>
    </View>
  );
};

export default Transaction;
