import { ScrollView, SafeAreaView, View, Text, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

// reducers
import { process } from '../../../reducers/payment/payment';

// css
import styles from './purchasesStyle';
import globalStyles from '../../../assets/styles/globalStyles';

// icons
import MapPin from '../../../assets/icons/map-pin.svg';
import Calendar from '../../../assets/icons/calendar.svg';

// etc
import { DATA } from './purchaseData';

export default function Purchases() {
  const orderDetail = (id: number, status: string) => {
    id = id - 1;
    switch (status) {
      case 'paid':
        router.push({
          pathname: 'order/[id]',
          params: { id: id },
        });
        break;
      case 'unpaid':
        router.push({
          pathname: 'payment/[id]',
          params: { id: id },
        });
        break;
      default:
        break;
    }
  };
  return (
    <View>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          height: '100%',
        }}
      >
        <View>
          <Text style={globalStyles.screenTitle}>Purchases</Text>
        </View>
        <ScrollView>
          <View style={styles.purchasesContainer}>
            {DATA.map((purchase) => (
              <Pressable
                onPress={() => orderDetail(purchase.id, purchase.status)}
                key={purchase.id}
                style={styles.purchases}
              >
                <Text style={globalStyles.textBold}>
                  Order ID: {purchase.id}
                </Text>
                <Text>
                  Status: {purchase.status} (
                  {purchase.process === 'waiting'
                    ? 'Waiting for payment'
                    : purchase.process === 'pending'
                    ? 'Not process'
                    : 'Complete'}
                  )
                </Text>
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}
                >
                  <Calendar />
                  <Text> {purchase.date}</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
                >
                  <MapPin />
                  <Text>{purchase.location}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
