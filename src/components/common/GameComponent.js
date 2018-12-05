import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const GameComponent = ({imageSource, title }) => {
  const { gameIcon, text, gameCard, gameCardContainer } = styles;
  return (
    <View style={gameCardContainer}>
      <TouchableOpacity style={gameCard}>
        <Image style={gameIcon} source={{uri: imageSource}}/>
        <Text style={text}>
        {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  gameCardContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#222222',
    paddingBottom: 10,
  },
  gameCard:{
    backgroundColor: '#444444',
    width: '90%',
    flexDirection: 'row',
    borderRadius: 4,

  },
  gameIcon: {
    width: 90,
    height: 90
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 10,
  }
};

export {GameComponent};
