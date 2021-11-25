import React, {useState} from 'react';
import Theme, {Box} from '../../../Components/Theme';
import {TextInput as RNTextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

const TextInput = ({placeholder, icon, validator}) => {
  const SIZE = Theme.borderRadii.m * 2;
  const [valid, setValid] = useState(true);

  return (
    <>
      <Box flexDirection="row" alignItems="center">
        <Icon name={icon} />
        <RNTextInput
          placeholder={placeholder}
          underlineColorAndroid="transparent"
        />
        {(valid || valid === false) && (
          <Box borderRadius="m" height={SIZE} width={SIZE}>
            <Icon name={valid ? 'check' : 'x'} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default TextInput;
