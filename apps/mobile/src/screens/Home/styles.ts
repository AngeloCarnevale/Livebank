import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    paddingHorizontal: 20,
  },
  userName: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  salutationMsg: {
    color: "#d0d0d0",
    fontSize: 12,
    paddingTop: 5,
  },
  balanceContainer: {
    borderBottomColor: "#b0b0b0",
    borderBottomWidth: 1,
    paddingVertical: 20,
    gap: 10,
  },
  labelBalance: {
    color: "#c0c0c0",
  },
  balanceValue: {
    color: "#FFE071",
    fontSize: 22,
    fontWeight: "600",
  },
  balanceAndEye: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    paddingLeft: 5,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    gap: 60,
    marginTop: 25,
  },
  iconButton: {
    backgroundColor: "#1B1B1B",
    borderRadius: 15,
    padding: 15,
  },
  button: {
    display: "flex",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    marginTop: 10,
  },
});
