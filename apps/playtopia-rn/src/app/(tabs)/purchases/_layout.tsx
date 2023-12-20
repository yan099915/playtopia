import { Stack } from 'expo-router';

export default function PurchasesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Purchase List' }} />
    </Stack>
  );
}
