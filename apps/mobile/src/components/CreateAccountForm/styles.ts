import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 90,
  },
  blockContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  block: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    color: "#d0d0d0",
    paddingBottom: 5,
  },
  textInput: {
    backgroundColor: "#0c0c0c",
    borderColor: "#d0d0d0",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    color: "white",
  },
  buttonCreateAccount: {
    backgroundColor: "#FFE071",
    padding: 12,
    borderRadius: 5,
  },
  textButton: {
    textAlign: "center",
    fontWeight: "600",
  },
  textBottom: {
    color: "white",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    marginBottom: 9,
  },
  spanText: {
    color: "#FFE071",
  },
});
