var React = require('react-native');
var Summary = require('./Summary')
var {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
} = React;

var styles = StyleSheet.create({
	mainContainer: {
	    flex: 1,
	    padding: 30,
	    marginTop: 65,
	    flexDirection: 'column',
	    justifyContent: 'center',
	    backgroundColor: "#9b9b9b"
  	},
  	image: {
  		width: 285,
		height: 395
  	},
  	container1: {
  		flex: 1,
  		flexDirection: "row",
  		justifyContent: "space-between",
  		paddingRight: 50,
  		paddingLeft: 50,
  		paddingTop: 50
  	}, container2: {
  		flex: 1,
  		flexDirection: "row",
  		justifyContent: "space-between",
  		paddingRight: 50,
  		paddingLeft: 50,
  		paddingBottom: 100
  	},
	welcome: {
		/* Text style for "Welcome to..." */
		height: 14,
		color: "#043f83",
		fontFamily: 'Avenir',
		marginTop: 40,
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 12,
		lineHeight: 14,
		backgroundColor: 'transparent'
	}, 
});

class Welcome extends React.Component{
	submitScore(score){
		console.log("yo");
		this.props.navigator.push({
			component: Summary,
			title: 'Summary',
			passProps: {

			}
		})
	}

	render(){
		return(
			<View style = {styles.mainContainer}> 
			  <Image style={styles.image} source={require("../images/bindings.png")}>
				<Text style = {styles.welcome}> How are you feeling today Aneesh? </Text>
				<View style = {styles.container1}>
				    <TouchableHighlight
					  onPress = {this.submitScore(1)}
					  underlayColor = '#f1eeee'>
					    <Image source = {require("../images/smile.png")} />
					</TouchableHighlight>
				</View>
			  </Image>
			</View>
		)
	}
}

module.exports = Welcome