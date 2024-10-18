import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './components/principal';
import Vitrine1 from './components/vitrine1';
import Vitrine2 from './components/vitrine2';
import Vitrine3 from './components/vitrine3';
import Footer from './components/footer';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#000',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarIndicatorStyle: { backgroundColor: '#000' },
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="Vitrine1" component={Vitrine1} options={{ tabBarLabel: 'Converse' }} />
        <Tab.Screen name="Vitrine2" component={Vitrine2} options={{ tabBarLabel: 'Nike' }} />
        <Tab.Screen name="Vitrine3" component={Vitrine3} options={{ tabBarLabel: 'Adidas' }} />
      </Tab.Navigator>
    </NavigationContainer>
    <Footer />

    </>
  );
}
