import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './Home';

const RootStack = createStackNavigator({
	  Home: {screen: Home}
	}, {
	  initialRouteName: 'Home',
	  navigationOptions: {
	    header: null
	  }
});

// const AppContainer = createAppContainer(RootStack);

export default class MyFormApplication extends Component {
	render() {
		return <RootStack />;
	}
}
