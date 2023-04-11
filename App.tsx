
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/views/Home';
import NavigationBarContainer from './src/components/NavigationBarContainer';
import AddListing from './src/views/AddListingPageOne';
import AddListingPageTwo from './src/views/AddListingPageTwo';
import AddListingPageOne from './src/views/AddListingPageOne';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Add Listing"
          component={AddListingPageOne}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;