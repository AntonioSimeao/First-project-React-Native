import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  name: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    marginLeft: 16,
  },
  btn: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  btntext: {
    color: "#fff",
    fontSize: 24,
  },
});
