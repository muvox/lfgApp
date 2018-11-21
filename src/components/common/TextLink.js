import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TextLink = ({ onPress, children}) => {
  const { button, text} = styles;
  return(
    <View styles={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={onPress} style={button}>
        <Text style={text}>
        {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  text: {
    alignSelf: 'center',
    color: 'blue',
    fontSize: 18,
    fontWeight: '700',
    textDecorationLine: 'underline',
    paddingTop: 10,
    paddingBottom
  },
  button: {
    marginTop: 5,
    marginBottom: 5
  }
};

export { TextLink };
