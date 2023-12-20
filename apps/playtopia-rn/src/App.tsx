import { SafeAreaView, View, StyleSheet } from 'react-native';

import Payment from './pages/Payment/Payment';
import PaymentMethod from './pages/PaymentMethod/PaymentMethod';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    DarkerGrotesque: require('./assets/fonts/DarkerGrotesque-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.mainContainer} onLayout={onLayoutRootView}>
        <PaymentMethod />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    paddingBottom: 16,
  },
});

export default App;
