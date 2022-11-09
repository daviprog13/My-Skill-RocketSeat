import React, { useState, useEffect } from 'react'
import {
  View /* encapsula todo conteudo */,
  Text /* Tudo que é texto é colocado aqui */,
  StyleSheet /* componente de estilo css colocado na parte inferior do código */,
  TextInput /* input de código  */,
  Platform /* modificação de plataforma para plkataforma por hora estamos usando no css stylesheet */,
  ScrollView /* garante o scroll de uma lista com POUCOS ELEMENTOS */,
  FlatList /* FlatLsit MUITOS elementos */,
  StatusBar /* manipulação de statusbar barra de cima  */
} from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface SkillData {
  id: string
  name: string
  date?: Date
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkill, setMySkill] = useState<SkillData[]>([])
  const [greeting, setGreetings] = useState('')
  function handleNewSkill() { /* função que adiciona */
    const data = {
      id: String(new Date().getTime()) /* criou um id único  */,
      name: newSkill
    }
    setMySkill(oldState => [...oldState, data])
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if(currentHour < 12){
      setGreetings("Bom dia")
    }
    else if(currentHour > 12 && currentHour < 18){
      setGreetings("Boa Tarde")
    }else{
      setGreetings("Boa Noite")
    }
  }, [])

  function handleRemoveSkill(id: string) { /* função que remove */
    setMySkill(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Davi</Text>
      <Text style={styles.greetings}>
        {greeting}
      </Text>

      <TextInput /* input */
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#999"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleNewSkill} />

      <Text style={[styles.title, { marginVertical: 20 }]}>My Skills</Text>     

      <ScrollView showsVerticalScrollIndicator={false}>
        {mySkill.map(skill => (
          <SkillCard 
          key={skill.id} 
          skill={skill.name} 
          onPress={() => handleRemoveSkill(skill.id)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 30,
    paddingHorizontal: 30,
    fontSize: 24
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
    marginLeft: 30,
    marginRight: 30
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
  greetings:{
    color:'#FFFFFF',
    paddingHorizontal: 30
  }
})
