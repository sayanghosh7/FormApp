import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, Image, Text, View} from 'react-native';
export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'sayan',
			forms: []
		}
	}

	getForms(){
		alert('clicked');
	}

	userSettings(){
		alert('settings');
	}

	render() {
		return (
			<View>
				<View style={styles.header}>
					<View>
						<Image style={{height: 40, width: 40}} source={require('../assets/1.1.png')}/>
						{/*<Text style={styles.headerText}>LE</Text>*/}
					</View>
					<View>
						<TouchableHighlight style={{borderRadius: 50, backgroundColor: '#fff', width: 41.5, height: 40, alignItems: 'center', justifyContent: 'center'}}
							onPress={this.userSettings.bind(this)}>
							<Text style={{fontSize: 20, color: '#ef5a20', margin: 0}}>S</Text>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.bodyContainer}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', width: "100%"}}>
						<Text style={{marginTop: 5}}>Refreshed</Text>
						<Text style={{marginTop: 5}}>0 forms</Text>	
					</View>
					{this.state.forms.length ? (
						<View>
							<Text>Forms</Text>
						</View>
					) : (
						<View style={{marginTop: 50}}>
							<View style={{width: "100%", height: "auto", justifyContent: 'center', alignItems: 'center', marginBottom: 10}} >
								<Image style={{width: 100, height: 100}} source={require('../assets/noun_Error_1905451.png')}/>
							</View>
							<View style={{alignItems: 'center', marginBottom: 10}}>
								<Text style={{fontSize: 20, color: '#ef5a20'}}>No Forms</Text>
							</View>
							<View style={styles.refreshFormOuter}>
								<TouchableHighlight style={styles.refreshFormInner} onPress={this.getForms.bind(this)}>
									<View>
										<Text style={{color: '#fff'}}>Refresh forms</Text>
									</View>
								</TouchableHighlight>
							</View>
						</View>
					)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		height: 46, 
		paddingHorizontal: 10,
		alignItems: 'center',
		flexDirection: 'row', 
		justifyContent: 'space-between',
		backgroundColor: '#ef5a20' 
	},
	headerText: {
		fontSize: 22, 
		color: '#fff'
	},
	bodyContainer: {
		paddingHorizontal: 10
	},
	refreshFormOuter: {
		alignItems: 'center'
	},
	refreshFormInner: {
		height: 40,
		width: 120,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ef5a20',
		shadowColor: '#777',
		shadowOffset: {width: 2, height: 5},
		shadowOpacity: 1,
		elevation: 5
	}
})