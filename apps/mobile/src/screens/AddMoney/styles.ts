import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  textInput: {
    backgroundColor: '#c0c0c0'
  }, 
  labelAccountNumber: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  }, 
  amountContainer: {

  }, 
  amountLabel: {
    color: '#c0c0c0'
  },
  amountInput: {
    color: '#d0d0d0',
    textAlign: 'center'
  },
  sendButton: {
    backgroundColor: '#FFE071',
    borderRadius: 5,
    padding: 5,
    
  }, 
  sendText: {
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
