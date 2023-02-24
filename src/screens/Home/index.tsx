import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = ["Antonio", "Paloma", "Mari", "Irene"];

  function handleParticipantAdd() {
    console.log("Você clicou no botão +");
  }
  function handleParticipantRemove(name: string) {
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
      {
      participants
      }
      <Participant
        name="Antonio"
        onRemove={() => handleParticipantRemove("Antonio")}
      />
    </View>
  );
}
