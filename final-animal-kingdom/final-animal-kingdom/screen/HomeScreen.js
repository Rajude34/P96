import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
//import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/Jungle.jpg')}
            style={styles.backgroundImage}>
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>Animal Kingdom</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.routeCard}
                onPress={() =>
                  this.props.navigation.navigate('LionScreen')
                }>
                <Text style={styles.title}>Lion</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.routeCard}
                onPress={() => this.props.navigation.navigate('ElephantScreen')}>
                <Text style={styles.title}>Elephant</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.routeCard}
                onPress={() => this.props.navigation.navigate('CheetahScreen')}>
                <Text style={styles.title}>Cheetah</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.routeCard}
                onPress={() => this.props.navigation.navigate('MonkeyScreen')}>
                <Text style={styles.title}>Monkey</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 100,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 2,
    margin: 10,
    width: 150,
    height: 200,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});