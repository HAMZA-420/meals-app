import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {Apploading } from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans' : require('./assets/fonts/OpenSanas-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontloaded] = useState(false);

  if(!fontLoaded) {
    return (
      <Apploading
      startAsync = {fetchFonts}
      onFinish={() => setFontloaded(true)}
      onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
