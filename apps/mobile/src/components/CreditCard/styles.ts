import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0d0d0d',
  },
  fronCard: {
    backgroundColor: "purple",
    width: 300,
    borderRadius: 5,
    height: 150,
  }, 
  backCard: {
    backgroundColor: "purple",
    width: 300,
    borderRadius: 5,
    height: 150
  },
  cvv: {
    textAlign: 'right',
    textAlignVertical: 'center',
    height: '100%',
    paddingRight: 20,
    color: 'white'
  }, 
  cardNumber: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 20
  }
});
