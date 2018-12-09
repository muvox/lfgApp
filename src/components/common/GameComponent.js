import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const GameComponent = ({imageSource, title, onPress }) => {
  const { gameIcon, text, gameCard, gameCardContainer } = styles;
  return (
    <View style={gameCardContainer}>
      <TouchableOpacity onPress={onPress} style={gameCard}>
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
    height: 90,
    borderRadius: 4,
  },
  text: {
    flex:1,
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 10,
    flexWrap: 'wrap'
  }
};

export {GameComponent};
