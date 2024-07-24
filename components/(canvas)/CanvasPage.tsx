import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import CanvasContainer from './CanvasContainer'
import ColorButton from './ColorButton'
import SizeChanger from './SizeChanger'

const CanvasPage = () => {

    const [color, setColor] = useState<string>("blue")
    const [strokeWidth, setStrokeWidth] = useState<number>(6)

  return (
    <View style={styles.container}>
        <SizeChanger strokeWidth={strokeWidth} setStrokeWidth={setStrokeWidth} />
      <View style={{flexDirection: "row"}}>
        <ColorButton color='red' setColor={setColor} />
        <ColorButton color='green' setColor={setColor} />
        <ColorButton color='blue' setColor={setColor} />
        <ColorButton color='pink' setColor={setColor} />
        <ColorButton color='yellow' setColor={setColor} />

      </View>
      
      <CanvasContainer color={color} strokeWidth={strokeWidth}/>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }
})

export default CanvasPage