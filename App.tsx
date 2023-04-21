
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/views/Home';
import Start from './src/views/Start';
import Login from './src/views/Login';
import NavigationBarContainer from './src/components/NavigationBarContainer';
import AddListingPageOne from './src/views/AddListingPageOne';
import AddListingPageTwo from './src/views/AddListingPageTwo';
import SignUp from './src/views/SignUp';
import AddListingPageThree from './src/views/AddListingPageThree';
import Feed from './src/views/Feed';

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
          component={NavigationBarContainer}
          options={{title:"Start"}}
        />
        <Stack.Screen
          name = 'Login'
          component={Login}
        />
        <Stack.Screen 
          name = "SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;