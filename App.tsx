import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/views/Home';
import DetailView from './src/views/DetailView';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen
          name = "Home"
          component={Home}
          options={{title:"Home"}}
        /> */}
        <Stack.Screen
          name="DetailView"
          component={DetailView}
          options={{title: 'DetailView'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
