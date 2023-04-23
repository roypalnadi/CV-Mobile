import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../redux/reducer';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.value);
  return (
    <View style={styles.container}>
      <View style={styles.bottomStyle}>
        <Button
          mode="elevated"
          buttonColor="#cc2e00"
          onPress={() => dispatch(increment())}>
          <Text style={[styles.textStyle, {color: '#FFFFFF'}]}>+</Text>
        </Button>
      </View>
      <Text style={styles.textStyle}>{counter}</Text>
      <View style={styles.bottomStyle}>
        <Button
          mode="elevated"
          buttonColor="#005ce6"
          onPress={() => dispatch(decrement())}>
          <Text style={[styles.textStyle, {color: '#FFFFFF', fontSize: 20}]}>
            -
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomStyle: {
    margin: 20,
    fontSize: 20,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Counter;
