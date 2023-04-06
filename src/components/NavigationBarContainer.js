import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Screens
import Home from '../views/Home';
import Feed from '../views/Feed';
import Match from '../views/Match';
import Favorites from '../views/Favorites';
import Chat from '../views/Chat';

const Tab = createBottomTabNavigator();

function NavigationBarContainer() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            height: 56,
            backgroundColor: '#FAAF6C',
          }
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="paw" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Match"
          component={Match}
          options={{
            tabBarLabel: 'Match',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="gesture-swipe" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cards-heart-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  export default NavigationBarContainer;