import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Data = {
  namePage: string;
};

const TopBar = ({data}: {data: Data}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.squareShapeView]}>
      <View style={styles.contentShapeView}>
        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="long-arrow-left" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            zIndex: -1,
          }}>
          <Text
            style={{
              fontSize: 23,
              color: '#FFFFFF',
              fontWeight: 'bold',
            }}>
            {data.namePage}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentShapeView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  squareShapeView: {
    backgroundColor: '#005ce6',
    height: 100,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
  },
});

export default TopBar;
