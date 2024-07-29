import { Feather } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AdvancedPath } from '../../../utils/types';

type Props = {
    setPaths: React.Dispatch<React.SetStateAction<AdvancedPath[]>>;
    setRegretPaths: React.Dispatch<React.SetStateAction<AdvancedPath[]>>;
  };
  

const ClearCanvas = ({setPaths, setRegretPaths}: Props) => {

    const handleClear = () => {
        setPaths([])
        setRegretPaths([])
    }

  return (
    <TouchableOpacity onPress={() => handleClear()} style={styles.button}>
      <Feather name={"trash-2"} size={55} color={"#b91c1c"} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#a8a29e",
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
}
})

export default ClearCanvas