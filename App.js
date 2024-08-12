import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/intro/Home';
import HomeScreen from './Screens/Home/HomeScreen';
import Profile from './Screens/Profile/Profile';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SearchCity from './Screens/cities/SearchCity';
import Stationary from './Screens/Product/Stationary';
import PhoneLogin from './Screens/authentication/PhoneLoginPage';
import OtpLogin from './Screens/authentication/OtpLogin';
import PhoneUSerDetail from './Screens/authentication/PhoneUserDetail';
import ExploreProperties from './Screens/Property/ExploreProperties';
import BestOffer from './Screens/Order/BestOffer';
import ExploreColleges from './Screens/Property/ExploreColleges';
import PropertiesMoreDetails from './Screens/Property/PropertiesMoreDetails';
import ListProperty from './Screens/Property/ListProperty';
import * as Font from 'expo-font';
import ProductPage from './Screens/Product/ProductPage';
import Cart from './Screens/Product/Cart';
import ReferEarn from './Screens/Refer/ReferEarn';
import Complete from './Screens/Complain/Complete';
import YourCompaint from './Screens/Complain/YourCompaint';
import IssueExplainContinue from './Screens/Complain/IssueExplainContinue';
import PropertyComplete from './Screens/Property/PropertyComplete';
import CartCheckout from './Screens/Product/CartCheckout';
import PremiumVisit from './Screens/Property/PremiumVisit';
import Offer from './Screens/Order/Offer';
import Logout from './Screens/authentication/Logout';
import { Provider } from 'react-redux';
import store from './Screens/store/store';
import IssueComplaint from './Screens/Complain/IssueComplaint';
import SelectBottomSheet from './Screens/Property/SelectRoomBottomSheet'
import ExploreMorePropertiesSheet from './Screens/Property/ExploreMorePropertiessheet';
const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='SearchCity' component={SearchCity} />
      <Stack.Screen name='Stationary' component={Stationary} />
      <Stack.Screen name='PhoneLogin' component={PhoneLogin} />
      <Stack.Screen name='OtpLogin' component={OtpLogin} />
      <Stack.Screen name='PhoneUSerDetail' component={PhoneUSerDetail} />
      <Stack.Screen name='ExploreProperties' component={ExploreProperties} />
      <Stack.Screen name='BestOffer' component={BestOffer} />
      <Stack.Screen name='ExploreColleges' component={ExploreColleges} />
      <Stack.Screen name='PropertiesMoreDetails' component={PropertiesMoreDetails} />
      <Stack.Screen name='ListProperty' component={ListProperty} />
      <Stack.Screen name='ProductPage' component={ProductPage} />
      <Stack.Screen name='Cart' component={Cart} />
      <Stack.Screen name='ReferEarn' component={ReferEarn} />
      <Stack.Screen name='Complete' component={Complete} />
      <Stack.Screen name='YourCompaint' component={YourCompaint} />
      <Stack.Screen name='IssueExplainContinue' component={IssueExplainContinue} />
      <Stack.Screen name='PropertyComplete' component={PropertyComplete} />
      <Stack.Screen name='CartCheckout' component={CartCheckout} />
      <Stack.Screen name='PremiumVisit' component={PremiumVisit} />
      <Stack.Screen name='Offer' component={Offer} />
      <Stack.Screen name='IssueComplaint' component={IssueComplaint} />
      <Stack.Screen name='SelectBottomSheet' component={SelectBottomSheet} />
      <Stack.Screen name='ExploreMorePropertiesSheet' component={ExploreMorePropertiesSheet} />
      <Stack.Screen name='Logout' component={Logout} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'NunitoSans-Regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
        'NunitoSans-Semibold': require('./assets/fonts/NunitoSans_7pt_SemiExpanded-Bold.ttf'),
        'NunitoSans-Bold': require('./assets/fonts/NunitoSans_Bold.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Handlee-Regular': require('./assets/fonts/Handlee-Regular.ttf'),
      });
      setFontsLoaded(true);
    })();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
