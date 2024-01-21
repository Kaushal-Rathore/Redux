import {View, Text, StyleSheet, Button, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

// jha button pe action dikkhna hai vha call hoga action
import {addToCart} from './Redux/Reducer';
import {useDispatch, useSelector} from 'react-redux';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cardItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const HandleClick = item => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    if (cardItems && cardItems.length) {
      cardItems.forEach((element)=>{
        if(element.name===item.name){
            setIsAdded(true)
        }
      })
    }
  }, [cardItems]);
  return (
    <View style={styles.conatiner}>
      <Text style={styles.txt}>Model:{item.name}</Text>
      <Text style={styles.txt}>Price:{item.price}</Text>
      <Text style={styles.txt}>Color:{item.color}</Text>
      <Text style={styles.txt}>Description:{item.description}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: item.img}} />
      {/* <Button title="check" onPress={() => HandleClick(item)}></Button> */}
      {isAdded ? (
        <Button title="Remove To Cart" onPress={() => HandleClick(item)} />
      ) : (
        <Button title="Add To Cart" onPress={() => HandleClick(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    textAlign: 'center',
  },
  conatiner: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    borderBottomWidth: 2,
    padding: 10,
    margin: 30,
  },
});

export default Product;
