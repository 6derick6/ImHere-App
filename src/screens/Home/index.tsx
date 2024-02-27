import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from './styles';

import { Participant } from "../../components/Participant";

export function Home(){
  const participants = ['Dérick', 'Braian', 'Augusto', 'Gordo', 'Leticia', 'Mello', 'Guilherme', 'Alan', 'Wesley'];

  function handleParticipantAdd(){

  }

  function handleparticipantRemove(name: string){
    
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
              key={item}
              name={item} 
              onRemove={() => handleparticipantRemove("Dérick")} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
      
    </View>
  )
}