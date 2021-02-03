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
import Home from "./src/screens/Home";
import "react-native-gesture-handler";
import Navigation from "./src/navigation";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>
        <Navigation/>
        {/* <Home/> */}
      </SafeAreaView>
    </>
  );
};



export default App;
