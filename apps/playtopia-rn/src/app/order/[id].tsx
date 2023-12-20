import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';

import BackButton from '../../components/BackButton/BackButton';
import globalStyles from '../../assets/styles/globalStyles';

import ShopeePay from '../../assets/icons/shopeepay.svg';
import Ovo from '../../assets/icons/ovo.svg';
import Gopay from '../../assets/icons/gopay.svg';
import BCA from '../../assets/icons/BCA.svg';
import BNI from '../../assets/icons/BNI.svg';
import BRI from '../../assets/icons/BRI.svg';
import Mandiri from '../../assets/icons/Mandiri.svg';
import CreditCard from '../../assets/icons/credit-card-black.svg';

import styles from './PaymentMethodStyles';
import RadioButton from '../../components/RadioButton/RadioButton';
import { useLocalSearchParams } from 'expo-router';

import { DATA } from '../(tabs)/purchases/purchaseData';

export default function PaymentMethod() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <View>
        <View style={globalStyles.header}>
          <BackButton />
        </View>
        <ScrollView>
          <Text style={globalStyles.screenTitle}>Order Detail</Text>

          <View style={globalStyles.listContainer}>
            <View style={{ margin: 16, gap: 10 }}>
              <Text>Order Id : {DATA[id].id}</Text>
              <Text>Due Date : {DATA[id].status}</Text>
              <Text>Location : {DATA[id].location}</Text>
              <Text>
                Total Payment : IDR{' '}
                {DATA[id].totalPayment
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
