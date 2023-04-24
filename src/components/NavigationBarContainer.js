import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from "../../assets/colors";

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
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: COLORS.black,
          tabBarHideOnKeyboard:  true,
          tabBarStyle: {
            height: 56,
            backgroundColor: COLORS.primary,
          }
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            headerShown: false,
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
            headerShown: false,
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
            headerShown: false,
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
            headerShown: false,
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