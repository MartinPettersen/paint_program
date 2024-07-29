import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import ColorButton from './ColorButton'
import { Feather } from '@expo/vector-icons'
import ColorPicker from './ColorPicker'

type Props = {
    setColor: React.Dispatch<React.SetStateAction<string>>
}

const CustomColor = ({setColor}: Props) => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0) 
    const [blue, setBlue] = useState(0) 
    const [colorPickerModalVisible, setcolorPickerModalVisible] = useState(false);

    const handleColorPicker = () => {
        setcolorPickerModalVisible(true)
    }

  return (
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <ColorButton color={`rgb(${red}, ${green}, ${blue})`} setColor={setColor} />
      <TouchableOpacity onPress={handleColorPicker}>

      <Feather name={"edit"} size={46} color={"white"} />
      </TouchableOpacity>
      <ColorPicker red={red} green={green} blue={blue} setRed={setRed} setGreen={setGreen} setBlue={setBlue} colorPickerModalVisible={colorPickerModalVisible} setcolorPickerModalVisible={setcolorPickerModalVisible}/>
    </View>
  )
}

export default CustomColor