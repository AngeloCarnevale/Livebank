import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    paddingHorizontal: 20,
    gap: 50,
  },
  userContainer: {
    backgroundColor: '#1B1B1B',
    borderRadius: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 15
  },
  userName:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26
  },
  email:{
    color: '#c0c0c0',
    fontSize: 18
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 5
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }
});
