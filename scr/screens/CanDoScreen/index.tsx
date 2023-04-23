import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import TopBar from '../../components/TopBar';

const CanDoScreen = ({navigation}: any) => {
  const {t} = useTranslation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <TopBar
        data={{
          namePage: t('can do'),
        }}
      />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.mainCanDo}
          onPress={() => navigation.navigate('FormScreen')}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Form</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainCanDo}
          onPress={() => navigation.navigate('LocalStorageScreen')}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Local Storage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainCanDo}
          onPress={() => navigation.navigate('ReduxScreen')}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Redux</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainCanDo}
          onPress={() => navigation.navigate('NotificationScreen')}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            {t('notification')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainCanDo}
          onPress={() => navigation.navigate('CameraScreen')}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{t('camera')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainCanDo}
          onPress={() => navigation.navigate('AxiosScreen')}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Axios</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainCanDo: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    marginVertical: 10,
    padding: 15,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
  },
  descriptionLogo: {
    flex: 1,
    marginLeft: 20,
    marginVertical: 10,
  },
  itemSkills: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default CanDoScreen;
