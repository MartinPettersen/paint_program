import React, { useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas'

const CanvasContainer = () => {

  const canvasRef = useRef<Canvas>(null)

  return (
    <View testID="canvas-view">
      <Canvas ref={canvasRef} style={styles.canvas} />
    </View>
  )
}

const styles = StyleSheet.create({
  canvas: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: "black",
  }
})

export default CanvasContainer