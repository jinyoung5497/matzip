import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/map/MapHomeScreen';
import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import CalendarHomeScreen from '../../screens/calendar/CalendarHomeScreen';

const drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <drawer.Navigator>
      <drawer.Screen name="MapHome" component={MapHomeScreen} />
      <drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
    </drawer.Navigator>
  );
}

export default MainDrawerNavigator;
