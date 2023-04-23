import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import '../../lang/i18n';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Snackbar, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getData} from '../../utils/storage';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  const [currentLan, setLang] = useState('in');
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [getName, setName] = useState('');
  const diffLang = currentLan === 'in' ? 'IN' : 'EN';
  const lang = currentLan === 'in' ? 'en' : 'in';
  const changeLanguage = (value: any) => {
    i18n
      .changeLanguage(value)
      .then(() => setLang(value))
      .catch(err => console.log(err));
  };

  const counter = useSelector((state: any) => state.counter.value);

  useEffect(() => {
    getData('name').then(value => {
      setName(value || '');
      if (value) {
        setVisible(true);
      } else {
        if (counter) {
          setVisible2(true);
        }
      }
    });
  }, [counter]);

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.squareShapeView]}>
            <TouchableOpacity
              onPress={() => {
                changeLanguage(lang);
              }}>
              <Text
                style={{
                  margin: 10,
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  fontSize: 18,
                }}>
                {diffLang}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentAvatar}>
            <Image
              style={styles.avatar}
              source={require('../../assets/me.jpg')}
            />
            <Text style={styles.mainName}>Roy Palnadi Pebruar</Text>
            <Text style={styles.mainInterest}>
              Full Stack | Web Developemnt | Mobile Development
            </Text>
          </View>
          <View style={styles.mainDetail}>
            <Icon
              style={styles.mainDetailItem}
              name="calendar-minus-o"
              size={22}>
              <Text style={styles.mainDetailText}> {t('born at')}</Text>
            </Icon>
            <Icon style={styles.mainDetailItem} name="phone" size={22}>
              <Text style={styles.mainDetailText}> 081907102428</Text>
            </Icon>
            <Icon style={styles.mainDetailItem} name="home" size={22}>
              <Text style={styles.mainDetailText}> Bogor, Indonesia</Text>
            </Icon>
            <Icon style={styles.mainDetailItem} name="envelope-o" size={22}>
              <Text style={styles.mainDetailText}> revannaldi@gmail.com</Text>
            </Icon>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginHorizontal: 18,
            }}
          />
          <Text style={styles.mainDescription}>{t('motivation')}</Text>
          <View style={styles.containerWhite}>
            <View style={styles.mainExp}>
              <View
                style={{
                  backgroundColor: '#F0F0F0',
                  height: 7,
                  borderRadius: 20,
                  width: 150,
                  margin: 10,
                }}
              />
              <View style={styles.mainExpContent}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Experience')}>
                  <View style={styles.mainExpContentItem}>
                    <Icon name="line-chart" size={40} color="white" />
                    <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>
                      {t('experience')}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('BackgroundScreen')}>
                  <View style={styles.mainExpContentItem}>
                    <Icon name="university" size={40} color="white" />
                    <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>
                      {t('background')}
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* <View style={styles.mainExpContentItem}>
                <Icon name="heart" size={40} color="white" />
                <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>
                  Interest
                </Text>
              </View> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('CanDoScreen')}>
                  <View style={styles.mainExpContentItem}>
                    <Icon name="cubes" size={40} color="white" />
                    <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>
                      {t('can do')}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={() => {
          setVisible(false);
          if (counter > 0) {
            setVisible2(true);
          }
        }}
        elevation={5}
        duration={Snackbar.DURATION_SHORT}
        action={{
          label: t('exit'),
        }}>
        <Text style={{fontSize: 18, color: '#FFFFFF'}}>Hallo {getName}</Text>
      </Snackbar>
      <Snackbar
        visible={visible2}
        onDismiss={() => setVisible2(false)}
        elevation={5}
        duration={Snackbar.DURATION_SHORT}
        action={{
          label: t('exit'),
        }}>
        <Text style={{fontSize: 18, color: '#FFFFFF'}}>Counter: {counter}</Text>
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  containerWhite: {
    backgroundColor: 'white',
    marginTop: 60,
    alignItems: 'center',
  },
  contentAvatar: {
    alignItems: 'center',
  },
  squareShapeView: {
    backgroundColor: '#005ce6',
    height: 100,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  avatar: {
    borderColor: '#F0F0F0',
    marginTop: -70,
    width: 140,
    height: 140,
    borderRadius: 140,
    borderWidth: 8,
  },
  mainName: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  mainInterest: {
    fontSize: 14,
    width: 250,
    textAlign: 'center',
  },
  mainDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 15,
  },
  mainDetail: {
    margin: 18,
    fontSize: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mainDetailItem: {
    width: '50%',
    textAlign: 'left',
    padding: 5,
  },
  mainDetailText: {
    fontSize: 14,
  },
  mainExp: {
    width: '90%',
    height: '100%',
    marginTop: -50,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 5,
  },
  mainExpContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    // height: 200,
    marginVertical: 10,
    justifyContent: 'center',
    // borderWidth: 1,
  },
  mainExpContentItem: {
    backgroundColor: '#005ce6',
    width: 107,
    height: 107,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
  },
});

export default HomeScreen;
