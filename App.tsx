
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/views/Home';
import Start from './src/views/Start';
import Login from './src/views/Login';
import NavigationBarContainer from './src/components/NavigationBarContainer';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start' 
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name = "Home"
          component={NavigationBarContainer}
          options={{
            title:"Home",
            headerShown: false
          }}
          
        />
        <Stack.Screen
          name = 'Start'
          component={Start}
          options={{title:"Start"}}
        />
        <Stack.Screen
          name = 'Login'
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;