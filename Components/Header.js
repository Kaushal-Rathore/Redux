import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.addToCart.value);
  console.log(cartData, 'check value');



  useEffect(() => {
    
  }, [cartData]);


  return (
    <View style={style.container}>
      <Text style={style.txt}>{cartData.length}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  txt: {
    fontSize: 23,
    textAlign: 'right',
    padding: 20,
    backgroundColor: 'orange',
  },
  container: {
    marginBottom: 23,
  },
});

export default Header;
