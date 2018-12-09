import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const PosterComponent = ({user, platform, playerAmount, details }) => {
  const { posterCardContainer, posterCard, headerStyle, userText, platformText, grayText, detailStyle } = styles;
  return (
  <View style={posterCardContainer}>
    <TouchableOpacity style={posterCard}>
      <View style={headerStyle}>
        <Text style={userText}>
          {user}
        </Text>
        <Text style={platformText}>
        {platform}
        </Text>
      </View>
      <Text style={grayText}>
        Looking for {playerAmount} players
      </Text>
      <Text style={detailStyle}>
        {details}
      </Text>
      <Text style={grayText}> Players Signed </Text>
      </TouchableOpacity>
    </View>
    );
};

const styles = {
  posterCardContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#222222',
    paddingBottom: 10,
  },
  posterCard:{
    backgroundColor: '#222222',
    width: '90%',
    flexDirection: 'column',
    borderRadius: 4,
    borderWidth: 1,
    borderColor:'#444',
  },
  headerStyle:{
    backgroundColor: '#444',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userText:{
    fontSize: 25,
    color: '#fff',
    marginLeft: 4,
  },
  platformText:{
    fontSize: 25,
    color: '#999',
    marginRight: 4,
  },
  grayText:{
    color: '#999',
    marginLeft: 4,
    paddingTop: 2,
    paddingBottom: 2,

  },
  detailStyle:{
    fontSize: 18,
    color: '#fff',
    marginLeft: 4,

  }
};

export {PosterComponent};
