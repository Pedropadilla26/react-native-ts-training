import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/components/Home';
import {InfoScreen} from './src/components/Info';

const RootStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  Info: {name: string};
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen
          name="Info"
          component={InfoScreen}
          initialParams={{name: ''}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
