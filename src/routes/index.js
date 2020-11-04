import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackRoutes from './stackRoutes';
import Menu from '../components/Menu';
import Loading from '../components/Loading';

const Drawer = createDrawerNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
    <Loading loading={true} /> 
      <Drawer.Navigator drawerContent={(props) => 
        <Menu {...props} /> }>
        <Drawer.Screen name='stackRoutes' component={StackRoutes}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Routes
