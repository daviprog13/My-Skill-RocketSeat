import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native'

interface SkillCardsProps extends TouchableOpacityProps {
  skill: string
}

export function SkillCard({ skill, ...rest }: SkillCardsProps) {
  return (
    <TouchableOpacity 
    style={styles.buttonSkills} 
    {...rest}
    activeOpacity={0.8}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkills: {
    backgroundColor: '#1F1e25',
    padding: 15,
    borderRadius: 50,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    padding: 15,
    fontSize: 22,
    fontWeight: 'bold'
  }
})
