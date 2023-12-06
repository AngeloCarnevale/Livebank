import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  valueInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    color: 'gray'
  },
  labelInput: {
    color: 'white',
  },
  requestText: {
    textAlign: 'center',
    fontWeight: '600'
  },
  requestButton: {
    backgroundColor: '#FFE071',
    borderRadius: 5,
    paddingVertical: 7
  },
  buttonContainer: {
    paddingBottom: 20 
  }
});
