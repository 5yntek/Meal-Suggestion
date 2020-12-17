/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const DEFAULT_WELCOME_TEXT = 'Hit "Fetch" to send request to webservice';
const ERROR_WELCOME_TEXT = 'Could not receive any response...';

const App = () => {
  const [welcomeText, setWelcomeText] = useState(DEFAULT_WELCOME_TEXT);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    console.log('Started');
    //fetchHelloWorld();
  }, []);

  const fetchHelloWorld = () => {
    setIsFetching(true);
    console.log('Fetching');
    fetch('http://192.168.178.106:7000/hello')
      .then((response) => response.text())
      .then((data) => {
        setIsFetching(false);
        setWelcomeText(data);
      })
      .catch((error) => {
        setIsFetching(false);
        setWelcomeText(ERROR_WELCOME_TEXT);
        console.error(error);
      });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Text>{welcomeText}</Text>
        </View>
        <Button title="fetch" onPress={fetchHelloWorld} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default App;
