import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

type DataType = {
  title: string;
};

type ComponentProps = {
  children: ReactNode;
  data: DataType;
};

const ContentBox: React.FC<ComponentProps> = ({data, children}) => {
  return (
    <View style={styles.mainContent}>
      <View style={styles.boxStyle}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{data.title}</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginVertical: 10,
            borderStyle: 'dashed',
          }}
        />
        <View>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    padding: 10,
  },
  boxStyle: {
    padding: 20,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
});

export default ContentBox;
