import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Categorias from '../screens/Categoria';
import Produtos from '../screens/Produtos';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
        drawerStyle: {
          backgroundColor: "#0C0C0C",
          width: 240,
          
        },
      }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={
            {
              title: "Home",
              drawerActiveTintColor: 'white',
              drawerLabelStyle: {color: 'white', fontFamily:'Roboto_400Regular'},
              headerTitleStyle: {color: 'transparent'},
              headerStyle: {backgroundColor: '#222222'},
         
            }
          }
        />

        <Drawer.Screen
          name="Categoria"
          component={Categorias}
          options={
            { 
              title: "Tela de Categoria",
              drawerActiveTintColor: 'white',
              drawerLabelStyle: {color: 'white', fontFamily:'Roboto_400Regular'},
              headerTitleStyle: {color: 'transparent'},
              headerStyle: {backgroundColor: '#222222'}
            }
          }
        />

        <Drawer.Screen
          name="Produto"
          component={Produtos}
          options={
            { 
              title: "Tela de Produto",
              drawerActiveTintColor: 'white',
              drawerLabelStyle: {color: 'white', fontFamily: 'Roboto_400Regular'},
              headerTitleStyle: {color: 'transparent'},
              headerStyle: {backgroundColor: '#222222'},
              
            }
          }
        />
      </Drawer.Navigator>
    );
  }