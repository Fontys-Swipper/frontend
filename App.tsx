import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/views/Home';
import DetailView from './src/views/DetailView';
import Start from './src/views/Start';
import Login from './src/views/Login';
import NavigationBarContainer from './src/components/NavigationBarContainer';
import AddListingPageOne from './src/views/AddListingPageOne';
import AddListingPageTwo from './src/views/AddListingPageTwo';
import SignUp from './src/views/SignUp';
import AddListingPageThree from './src/views/AddListingPageThree';
import Profile from './src/views/Profile';
import Settings from './src/views/Settings';
import UserInformation from './src/views/UserInformation';
import TermsOfService from './src/views/TermsOfService';
import ChangeMail from './src/views/ChangeMail';
import ChangePassword from './src/views/ChangePassword';
import Feed from './src/views/Feed';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="NavigationBar"
          component={NavigationBarContainer}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{title: 'Start'}}
        />
        <Stack.Screen name="AddListing1" component={AddListingPageOne} />
        <Stack.Screen name="AddListing2" component={AddListingPageTwo} />
        <Stack.Screen name="AddListing3" component={AddListingPageThree} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="UserInfo" component={UserInformation} />
        <Stack.Screen name="TermsOfService" component={TermsOfService} />
        <Stack.Screen name="ChangeMail" component={ChangeMail} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} /> */}
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
