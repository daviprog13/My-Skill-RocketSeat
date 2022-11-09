import React from 'react'
import { TouchableOpacity, 
         Text, 
         StyleSheet } from 'react-native'

export function Button({ onPress }) {
  return (
    <TouchableOpacity /* botão com opacidade */
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
  }
})
