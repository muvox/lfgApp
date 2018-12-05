import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const GameComponent = ({imageSource, title }) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={button}>
        <Image style={gameIcon} source={imageSource}/>
        <Text style={title}>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  gameIcon: {
    width: 90,
    height: 90
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'mediumpurple',
    backgroundColor: "rebeccapurple",
    borderRadius: 25,
    marginTop: 5,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 5
  }
};

export {GameComponent};
