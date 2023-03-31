
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/views/Home';
import NavigationBarContainer from './src/components/NavigationBarContainer';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component={NavigationBarContainer}
          options={{title:"Home"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
