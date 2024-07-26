import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

type Props = {
    color: string,
    setColor: React.Dispatch<React.SetStateAction<string>>
}

const ColorButton = ({color, setColor}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={() => setColor(color)}>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        padding: 24,
        margin: 10,
    }
})

export default ColorButton