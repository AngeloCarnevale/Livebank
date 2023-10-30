import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    paddingHorizontal: 20
  },
  userName: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  },
  salutationMsg: {
    color: '#d0d0d0',
    fontSize: 12
  },
  balanceContainer: {
    borderBottomColor: '#b0b0b0',
    borderWidth: 1,
    paddingBottom: 20
  },
  labelBalance: {
    color: '#c0c0c0'
  },
  balanceValue: {
    color: '#FFE071',
    fontSize: 22
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap:40
  },
  button: {
    backgroundColor: '#d0d0d0',
    display: 'flex',
    alignItems: 'center'
  },
});
