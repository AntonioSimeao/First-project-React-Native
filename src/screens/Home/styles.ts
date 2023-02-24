import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a5f83",
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: { color: "#000", fontSize: 16, fontWeight: "bold" },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 10,
    backgroundColor: "#1f1e25",
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 5,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 30,
  },
  btn: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  btntext: {
    color: "#fff",
    fontSize: 24,
  },
  listEmptyText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
});
