import React, { useState } from "react";
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
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante cadastrado com esse nome"
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }
  function handleParticipantRemove(name: String) {
    Alert.alert("Remover", `Remover o participante ${name} ?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participants) => participants !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
    console.log(`Você clicou em remover ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>{participantName}</Text>

      <Text style={styles.eventDate}>Sexta, 19 de Feveireiro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
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
