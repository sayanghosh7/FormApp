/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MyFormApplication from './src/components/MyFormApplication';

export default class App extends Component {
  render() {
    return (
      <View>
        <MyFormApplication />
      </View>
    );
  }
}
