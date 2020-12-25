/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, 
  StatusBar, Text
} from 'react-native';
import Home from "./src/screens/Home"

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Home/>
      </SafeAreaView>
    </>
  );
};



export default App;
