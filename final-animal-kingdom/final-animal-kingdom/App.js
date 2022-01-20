import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen';
import LionScreen from './screen/Lion';
import ElephantScreen from './screen/Elephant';
import CheetahScreen from './screen/Cheetah';
import MonkeyScreen from './screen/Monkey';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LionScreen" component={LionScreen} />
        <Stack.Screen name="ElephantScreen" component={ElephantScreen} />
         <Stack.Screen name="CheetahScreen" component={CheetahScreen} />
          <Stack.Screen name="MonkeyScreen" component={MonkeyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;