import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import SignUp from '../../modules/auth/views/SignUp';

const appStack = createMaterialBottomTabNavigator(
  {
    SignUp: { screen: SignUp },
  },
  {
    initialRouteName: 'SignUp',
    backBehavior: 'none',
  }
);

export default appStack;
