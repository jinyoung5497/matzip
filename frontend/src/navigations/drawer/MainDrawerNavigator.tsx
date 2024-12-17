import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/MapHomeScreen';

const drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <drawer.Navigator>
      <drawer.Screen name="MapHome" component={MapHomeScreen} />
    </drawer.Navigator>
  );
}

export default MainDrawerNavigator;
