import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ReduxState } from '../reducers/ReduxState';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    DarkerGrotesque: require('../assets/fonts/DarkerGrotesque-Black.ttf'),
    Nunito: require('../assets/fonts/NunitoSans10pt-Regular.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Provider store={ReduxState}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="payment/[id]" />
        <Stack.Screen name="order/[id]" />
      </Stack>
    </Provider>
  );
}
