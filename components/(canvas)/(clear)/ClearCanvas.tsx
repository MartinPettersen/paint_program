import { Feather } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
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
    <TouchableOpacity onPress={() => handleClear()}>
      <Feather name={"file-plus"} size={55} color={"white"} />
    </TouchableOpacity>
  )
}

export default ClearCanvas