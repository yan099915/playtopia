import { Tabs } from 'expo-router';
import HomeIcon from '../../assets/icons/home.svg';
import PurchasesIcon from '../../assets/icons/shopping-bag.svg';

export default function _layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tabs.Screen
        name="purchases"
        options={{
          title: 'Purchases',
          tabBarIcon: PurchasesIcon,
        }}
      />
    </Tabs>
  );
}
