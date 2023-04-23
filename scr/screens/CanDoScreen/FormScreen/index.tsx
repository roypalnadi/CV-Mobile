import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Button,
  Modal,
  Portal,
  Provider,
  RadioButton,
  Text,
  TextInput,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopBar from '../../../components/TopBar';
import {useTranslation} from 'react-i18next';

const FormScreen = () => {
  const {t} = useTranslation();
  const [getName, setName] = useState('');
  const [getAge, setAge] = useState('');
  const [getAddress, setAddress] = useState('');
  const [getGender, setGender] = useState('');

  const eraseAll = () => {
    setName('');
    setAge('');
    setAddress('');
    setGender('');
  };

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TopBar
          data={{
            namePage: 'Form',
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
            <TextInput
              mode="outlined"
              label={t('from value age') || 'Age'}
              placeholder={t('from value plcaeholder age') || 'Age'}
              style={styles.controlForm}
              keyboardType="numeric"
              onChangeText={input => setAge(input)}
              value={getAge}
              right={
                <TextInput.Icon
                  icon={() => <Icon name="hourglass-half" size={20} />}
                />
              }
            />
            <View style={[styles.controlForm, styles.controlRadio]}>
              <RadioButton.Group
                onValueChange={value => setGender(value)}
                value={getGender}>
                <View>
                  <RadioButton.Item
                    label={t('from value gender male')}
                    value="male"
                    color="#0000ff"
                  />
                </View>
                <View>
                  <RadioButton.Item
                    label={t('from value gender female')}
                    value="female"
                    color="#ff0066"
                  />
                </View>
              </RadioButton.Group>
            </View>
            <TextInput
              mode="outlined"
              label={t('from value address') || 'address'}
              placeholder={t('from value plcaeholder address') || 'Address'}
              style={styles.controlForm}
              multiline
              numberOfLines={3}
              onChangeText={input => setAddress(input)}
              value={getAddress}
              right={
                <TextInput.Icon
                  icon={() => <Icon name="map-marker" size={20} />}
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
                onPress={() => showModal()}>
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
              {t('from value after save')}
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 10,
                borderStyle: 'dashed',
              }}
            />
            <Text>
              {t('from value name')}: {getName}
            </Text>
            <Text>
              {t('from value age')}: {getAge}
            </Text>
            <Text>
              {t('from value gender')}:{' '}
              {getGender === 'male'
                ? t('from value gender male')
                : t('from value gender female')}
            </Text>
            <Text>
              {t('from value address')}: {getAddress}
            </Text>
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

export default FormScreen;
