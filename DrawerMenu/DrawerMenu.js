import { StyleSheet, } from 'react-native';

import MyDrawer from './MyDrawer';

export default function DrawerMenu() {
  return (
    <MyDrawer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});