import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import TopBar from '../../components/TopBar';

const ExperienceScreen = () => {
  const {t} = useTranslation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <TopBar
          data={{
            namePage: t('experience'),
          }}
        />
        <View style={{alignItems: 'center'}}>
          <View style={styles.mainExp}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {t('work experience')}
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 10,
                borderStyle: 'dashed',
              }}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.logo}
                source={require('../../assets/qelopak.png')}
              />
              <View style={styles.descriptionLogo}>
                <Text style={{fontWeight: 'bold', margin: 1}}>
                  Backend Developer
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 12, margin: 1}}>
                  PT. Qelopak Teknologi Indonesia
                </Text>
                <Text style={{fontSize: 12, margin: 1}}>
                  Jun 2020 - Now | 2 {t('yr')} 10 {t('mth')}
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 15, width: '90%'}}>
            <Text style={{lineHeight: 20, marginBottom: 20}}>
              {t('expText1')}
            </Text>
            <Text style={{lineHeight: 20}}>{t('expText2')}</Text>
          </View>
        </View>
        <View style={styles.squareShapeViewSecond}>
          <Image
            style={{width: 250, height: 250}}
            source={require('../../assets/iconExperience.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  squareShapeViewSecond: {
    backgroundColor: '#005ce6',
    alignItems: 'center',
    padding: 10,
  },
  mainExp: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    marginVertical: 10,
    padding: 15,
  },
  logo: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  descriptionLogo: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default ExperienceScreen;
