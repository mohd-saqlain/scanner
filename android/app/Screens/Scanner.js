import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const Scanner = () => {
  const [zoomValue, setZoomValue] = useState(0);

  const onSuccess = (e) => {
    console.log(e);
  };


  return (
    <View>
      <QRCodeScanner
        onRead={(e) => onSuccess(e)}
        cameraProps={{zoom: zoomValue}}
        cameraContainerStyle={StyleSheet.absoluteFill}
       
      />
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
