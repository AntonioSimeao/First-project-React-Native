import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = [
    "Antonio",
    "Paloma",
    "Mari",
    "Irene",
    "Josivania",
    "Jedidias",
    "José",
    "Julia",
    "Alice",
    "Lidia",
    "Ana",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Antonio")) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante cadastrado com esse nome"
      );
    }
    console.log("Você clicou no botão +");
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name} ?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style:"cancel"
      },
    ]);
    console.log(`Você clicou em remover ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 19 de Feveireiro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.btn} onPress={handleParticipantAdd}>
          <Text style={styles.btntext}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda ? Adiciona participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
