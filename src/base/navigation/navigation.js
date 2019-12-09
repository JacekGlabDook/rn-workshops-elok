import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SignUpView from '../../modules/auth/views/SignUpView';

const appStack = createMaterialBottomTabNavigator(
  {
    SignUp: { 
      screen: SignUpView, 
      navigationOptions: {
        tabBarLabel: 'Sign Up',
        tabBarIcon: <Ionicons name="ios-person-add" size={24} color="white" />
      },
    },
  },
  {
    initialRouteName: 'SignUp',
    backBehavior: 'none',
    labeled: true,
  }
);

export default appStack;
