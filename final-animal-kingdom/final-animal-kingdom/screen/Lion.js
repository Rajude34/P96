import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';
import {Audio} from 'expo-av'
export default class LionScreen extends Component {
     playSound =  () => {
     Audio.Sound.createAsync(
       
    require('../assets/ROARING_LION_SnS.mp3'),
    // { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bf8d694e39781253113d94c314048b75'  },
    { shouldPlay: true }
  );
  }
  render() {
    return (
      
      <View style={styles.container}>
         
        <Image
              source={require('../assets/Lion1.jpg')}
              style={{
                width: 150,
                height: 200,
                alignSelf: 'center',
              }}></Image> 
<View>
              <TouchableOpacity onPress={() =>
                  this.playSound()}>
              <Image source={require("../assets/Sound.jpg")} style={styles.iconImage}></Image>
              </TouchableOpacity>
              </View>
              <View>
        <Text style={styles.routeText}> Lions are the only cats that live in groups.</Text>
        <Text style={styles.routeText}> Female lions are the main hunters.</Text>
        <Text style={styles.routeText}> A lion's roar can be heard up to eight kilometres away</Text>
</View>
<View>
              <TouchableOpacity style={styles.back} onPress={() =>
                  this.props.navigation.navigate('Home')}>
              <Image source={require("../assets/Back.png")} style={styles.BackImage}></Image>
              </TouchableOpacity>
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
    backgroundColor: 'red'
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width:300,
    height:300,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  shift:{
  marginTop:80,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'white',
  },
  routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 0,
        paddingLeft: 25,
        
    },
    iconImage: {
        height: 100,
        width: 50,
        resizeMode: "contain",
        right: 20,
        top: -23,
        marginLeft: 110
    },
    BackImage: {
        height: 100,
        width: 75,
        resizeMode: "contain",
        right: 20,
        top: -10,
        marginLeft: 110
    },

    back: {
        height: 100,
        width: 100,
        resizeMode: "contain",
        right: 20,
        top: -10,
        marginLeft: 10
    },
});

