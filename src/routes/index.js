import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackRoutes from './stackRoutes';
import Menu from '../components/Menu';

const Drawer = createDrawerNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
        <Drawer.Screen name='stackRoutes' component={StackRoutes}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Routes
