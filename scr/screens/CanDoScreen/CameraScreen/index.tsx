import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TopBar from '../../../components/TopBar';
import ContentBox from '../../../components/ContentBox';
import {useTranslation} from 'react-i18next';
import {RNCamera} from 'react-native-camera';

const CameraScreen = () => {
  const {t} = useTranslation();
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);
  const camera = useRef<RNCamera>(null);

  const takePicture = async () => {
    if (camera.current) {
      try {
        await camera.current.resumePreview();
        const options = {quality: 0.5, base64: true};
        const data = await camera.current.takePictureAsync(options);
        console.log(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const switchCamera = () => {
    setCameraType(
      cameraType === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  };

  return (
    <ScrollView>
      <TopBar
        data={{
          namePage: t('camera'),
        }}
      />
      <ContentBox
        data={{
          title: t('camera'),
        }}>
        <RNCamera
          ref={camera}
          style={styles.preview}
          type={cameraType}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
        />
        <View style={styles.controls}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#ffbf00'}]}
            onPress={switchCamera}>
            <Text style={styles.text}>{t('switch camera')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#005ce6'}]}
            onPress={takePicture}>
            <Text style={styles.text}>{t('take picture')}</Text>
          </TouchableOpacity>
        </View>
      </ContentBox>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    height: 500,
    width: '100%',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 5,
    elevation: 10,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CameraScreen;
