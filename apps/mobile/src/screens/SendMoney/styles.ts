import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  textInput: {
    backgroundColor: '#a0a0a0'
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
    color: '#d0d0d0'
  },
  sendButton: {
    backgroundColor: '#FFE071',
    paddingVertical: 10,
    borderRadius: 5,
  }, 
  sendText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  mid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});
