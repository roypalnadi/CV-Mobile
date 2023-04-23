import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TopBar from '../../../components/TopBar';
import ContentBox from '../../../components/ContentBox';
import {useTranslation} from 'react-i18next';
import {Button, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import PushNotification from 'react-native-push-notification';

const NotificationScreen = () => {
  const sendNotify = () => {
    if (getTitle !== '' && getMessage !== '') {
      PushNotification.localNotification({
        channelId: 'notif-id',
        title: getTitle,
        message: getMessage,
      });
    }
  };

  const {t} = useTranslation();
  const [getTitle, setTitle] = useState('');
  const [getMessage, setMessage] = useState('');

  const eraseAll = () => {
    setTitle('');
    setMessage('');
  };

  return (
    <ScrollView>
      <TopBar
        data={{
          namePage: t('notification'),
        }}
      />
      <ContentBox
        data={{
          title: t('push notification'),
        }}>
        <TextInput
          mode="outlined"
          label={t('from value title') || 'Title'}
          placeholder={t('from value plcaeholder title') || 'Title'}
          style={styles.controlForm}
          onChangeText={input => setTitle(input)}
          value={getTitle}
          right={<TextInput.Icon icon={() => <Icon name="user" size={20} />} />}
        />
        <TextInput
          mode="outlined"
          label={t('from value message') || 'Message'}
          placeholder={t('from value plcaeholder message') || 'Message'}
          style={styles.controlForm}
          onChangeText={input => setMessage(input)}
          value={getMessage}
          numberOfLines={3}
          right={
            <TextInput.Icon
              icon={() => <Icon name="commenting-o" size={20} />}
            />
          }
        />
        <View style={styles.controlButton}>
          <Button
            icon={() => <Icon name="eraser" size={20} color="#FFFFFF" />}
            mode="elevated"
            buttonColor="#ffbf00"
            textColor="#FFFFFF"
            style={styles.buttonStyle}
            onPress={eraseAll}>
            {t('from value reset')}
          </Button>
          <Button
            icon={() => <Icon name="floppy-o" size={20} color="#FFFFFF" />}
            mode="elevated"
            buttonColor="#005ce6"
            textColor="#FFFFFF"
            style={styles.buttonStyle}
            onPress={() => sendNotify()}>
            {t('from value save')}
          </Button>
        </View>
      </ContentBox>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  controlForm: {
    marginVertical: 5,
  },
  controlButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  buttonStyle: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default NotificationScreen;
