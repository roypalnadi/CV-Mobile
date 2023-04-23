import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Button,
  Modal,
  Portal,
  Provider,
  Text,
  TextInput,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopBar from '../../../components/TopBar';
import {useTranslation} from 'react-i18next';
import {getData, removeData, setData} from '../../../utils/storage';

const LocalStorageScreen = () => {
  const {t} = useTranslation();
  const [getName, setName] = useState('');

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    getData('name').then(value => {
      setName(value || '');
    });
  }, []);

  return (
    <Provider>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TopBar
          data={{
            namePage: 'Local Storage',
          }}
        />
        <View style={styles.mainContent}>
          <View style={styles.fromStyle}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {t('from value')}
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 10,
                borderStyle: 'dashed',
              }}
            />
            <TextInput
              mode="outlined"
              label={t('from value name') || 'Name'}
              placeholder={t('from value plcaeholder name') || 'Name'}
              style={styles.controlForm}
              onChangeText={input => setName(input)}
              value={getName}
              right={
                <TextInput.Icon icon={() => <Icon name="user" size={20} />} />
              }
            />
            <View style={styles.controlButton}>
              <Button
                icon={() => <Icon name="trash" size={20} color="#FFFFFF" />}
                mode="elevated"
                buttonColor="#cc2e00"
                textColor="#FFFFFF"
                style={styles.buttonStyle}
                onPress={() => {
                  setName('');
                  removeData('name');
                }}>
                {t('from value delete')}
              </Button>
              <Button
                icon={() => <Icon name="floppy-o" size={20} color="#FFFFFF" />}
                mode="elevated"
                buttonColor="#005ce6"
                textColor="#FFFFFF"
                style={styles.buttonStyle}
                onPress={() => {
                  showModal();
                  setData('name', getName);
                }}>
                {t('from value save')}
              </Button>
            </View>
          </View>
        </View>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalStyle}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {t('local storage info')}
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 10,
                borderStyle: 'dashed',
              }}
            />
          </Modal>
        </Portal>
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContent: {
    padding: 10,
  },
  fromStyle: {
    padding: 20,
    elevation: 5,
    borderRadius: 5,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  controlForm: {
    marginVertical: 5,
  },
  controlRadio: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
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
  modalStyle: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
});

export default LocalStorageScreen;
