import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ProgressBar, Text} from 'react-native-paper';
import {Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import TopBar from '../../components/TopBar';

const BackgroundScreen = () => {
  const {t} = useTranslation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <TopBar
          data={{
            namePage: t('background'),
          }}
        />
        <View style={{alignItems: 'center'}}>
          <View style={styles.mainExp}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {t('education')}
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 10,
                borderStyle: 'dashed',
              }}
            />
            <View style={styles.itemSkills}>
              <Image
                style={styles.logo}
                source={require('../../assets/pakuan.png')}
              />
              <View style={styles.descriptionLogo}>
                <Text style={{fontWeight: 'bold', margin: 1}}>{t('univ')}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 12, margin: 1}}>
                  {t('major')}
                </Text>
                <Text style={{fontSize: 12, margin: 1}}>2015 - 2019</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.mainExp}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {t('skills')}
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 10,
                borderStyle: 'dashed',
              }}
            />
            <View style={styles.itemSkills}>
              <Image
                style={styles.logo}
                source={require('../../assets/php.png')}
              />
              <View style={styles.descriptionLogo}>
                <Text style={{fontWeight: 'bold', margin: 1}}>PHP</Text>
                <ProgressBar
                  style={styles.progress}
                  progress={0.9}
                  color={'#005ce6'}
                />
              </View>
            </View>
            <View style={styles.itemSkills}>
              <Image
                style={styles.logo}
                source={require('../../assets/html.png')}
              />
              <View style={styles.descriptionLogo}>
                <Text style={{fontWeight: 'bold', margin: 1}}>HTML</Text>
                <ProgressBar
                  style={styles.progress}
                  progress={0.8}
                  color={'#005ce6'}
                />
              </View>
            </View>
            <View style={styles.itemSkills}>
              <Image
                style={styles.logo}
                source={require('../../assets/css.png')}
              />
              <View style={styles.descriptionLogo}>
                <Text style={{fontWeight: 'bold', margin: 1}}>CSS</Text>
                <ProgressBar
                  style={styles.progress}
                  progress={0.8}
                  color={'#005ce6'}
                />
              </View>
            </View>
            <View style={styles.itemSkills}>
              <Image
                style={styles.logo}
                source={require('../../assets/javascript.png')}
              />
              <View style={styles.descriptionLogo}>
                <Text style={{fontWeight: 'bold', margin: 1}}>Javascript</Text>
                <ProgressBar
                  style={styles.progress}
                  progress={0.6}
                  color={'#005ce6'}
                />
              </View>
            </View>
            <View style={styles.itemSkills}>
              <Image
                style={styles.logo}
                source={require('../../assets/react-native.png')}
              />
              <View style={styles.descriptionLogo}>
                <Text style={{fontWeight: 'bold', margin: 1}}>
                  React Native
                </Text>
                <ProgressBar
                  style={styles.progress}
                  progress={0.7}
                  color={'#005ce6'}
                />
              </View>
            </View>
            <View style={styles.itemSkills}>
              <Image
                style={styles.logo}
                source={require('../../assets/golang.png')}
              />
              <View style={styles.descriptionLogo}>
                <Text style={{fontWeight: 'bold', margin: 1}}>Golang</Text>
                <ProgressBar
                  style={styles.progress}
                  progress={0.7}
                  color={'#005ce6'}
                />
              </View>
            </View>
          </View>
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
  mainExp: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    marginVertical: 10,
    padding: 15,
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
  progress: {
    borderRadius: 20,
    height: 10,
  },
  itemSkills: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default BackgroundScreen;
