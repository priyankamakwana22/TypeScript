import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addition, subtraction} from '../redux/Action';

const Counter = () => {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={() => dispatch(addition())}>
        <Text style={styles.txt}>Decrement</Text>
      </Pressable>
      <Text style={styles.txt}>{data}</Text>
      <Pressable style={styles.btn} onPress={() => dispatch(subtraction())}>
        <Text style={styles.txt}>Increment</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  txt: {fontSize: 20, fontWeight: '300', fontWeight: 'bold'},
  btn: {
    width: '50%',
    height: 50,
    backgroundColor: 'lightgreen',
    borderRadius: 20,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
