import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

import React, { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

//etc
import { DATA } from '../(tabs)/purchases/purchaseData';

// components
import BackButton from '../../components/BackButton/BackButton';
import RadioButton from '../../components/RadioButton/RadioButton';

// css
import styles from './PaymentMethodStyles';
import globalStyles from '../../assets/styles/globalStyles';

// icons
import ShopeePay from '../../assets/icons/shopeepay.svg';
import Ovo from '../../assets/icons/ovo.svg';
import Gopay from '../../assets/icons/gopay.svg';
import BCA from '../../assets/icons/BCA.svg';
import BNI from '../../assets/icons/BNI.svg';
import BRI from '../../assets/icons/BRI.svg';
import Mandiri from '../../assets/icons/Mandiri.svg';
import CreditCard from '../../assets/icons/credit-card-black.svg';
import Award from '../../assets/icons/award.svg';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import Calendar from '../../assets/icons/calendar.svg';
import Timer from '../../assets/icons/timer.svg';
import MapPin from '../../assets/icons/map-pin.svg';
import Voucher from '../../assets/icons/ticket.svg';
import ChevronRight from '../../assets/icons/chevron-right.svg';
import ChevronDown from '../../assets/icons/chevron-down.svg';
import Copy from '../../assets/icons/copy.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers/ReduxState';
import { process } from '../../reducers/payment/payment';

export default function PaymentProcess() {
  const { id } = useLocalSearchParams();
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const paymentProcess = useSelector((state: RootState) => state.payment.step);
  const dispatch = useDispatch();

  useEffect(() => {
    const target = new Date(DATA[id].dueDate);
    const interval = setInterval(() => {
      const now = new Date();
      const difference: number = target.getTime() - now.getTime();
      const d: number = Math.floor(difference / (100 * 60 * 60 * 24));
      setDays(d);

      const h: number = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s: number = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(Number(s));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <View>
        <View style={globalStyles.header}>
          <BackButton />
        </View>
        {DATA[id].status === 'unpaid' && paymentProcess === 'confirming' ? (
          <View>
            <ScrollView contentInset={{ bottom: 60, top: 0 }}>
              <Text style={globalStyles.screenTitle}>Pembayaran</Text>
              <View style={globalStyles.listContainer}>
                <View style={styles.orderDescriptionContainer}>
                  <Text>Periksa pesanan kamu sebelum membayar</Text>
                  <Text>Outlet</Text>
                  <View style={styles.locationPoint}>
                    <MapPin />
                    <Text style={globalStyles.textBold}>Lippo Mall Puri</Text>
                  </View>
                </View>
                <View style={styles.orderDescriptionFooter}>
                  <View>
                    <Text>Tanggal</Text>
                    <Text style={globalStyles.textBold}>28 Juni 2023</Text>
                  </View>
                  <View>
                    <Text>Jumlah Anak</Text>
                    <Text style={globalStyles.textBold}>2 Anak</Text>
                  </View>
                </View>
              </View>
              {/* start of order list */}
              <View>
                <View style={styles.contentTitleContainer}>
                  <Text style={globalStyles.contentTitle}>Pesanan</Text>
                </View>
                <View style={globalStyles.listContainer}>
                  <View style={styles.orderDetailsHeader}>
                    <Text>Jumlah Anak</Text>
                    <Text>{DATA[id].children.length}</Text>
                  </View>
                  <View style={styles.orderDetailsContainer}>
                    {DATA[id].children.map((child, id) => (
                      <View key={id}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Text style={globalStyles.textBold}>
                            {child.duration + ' Jam - Gelang ' + child.type}
                          </Text>
                          <Text style={globalStyles.textBold}>
                            {child.duration}
                          </Text>
                        </View>
                        <Text>{child.name}</Text>
                      </View>
                    ))}
                    <View style={styles.line}></View>

                    <View style={styles.orderDetailsList}>
                      <Text style={globalStyles.textBold}>Kaos Kaki</Text>
                      <Text style={globalStyles.textBold}>
                        {DATA[id].addons[0].qty}
                      </Text>
                    </View>
                    <View>
                      <View style={styles.orderDetailsList}>
                        <Text style={globalStyles.textBold}>Gelang Dewasa</Text>
                        <Text style={globalStyles.textBold}>
                          {DATA[id].adult.length}
                        </Text>
                      </View>
                      <Text>{DATA[id].adult[0].name}</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* end of order list */}
              {/* start of payment method */}
              <View>
                <View style={styles.contentTitleContainer}>
                  <Text style={globalStyles.contentTitle}>
                    Metode Pembayaran
                  </Text>
                </View>
                <View style={globalStyles.listContainer}>
                  <TouchableOpacity style={styles.selectButton}>
                    <View style={styles.buttonContentContainer}>
                      <BCA />
                      {/* <CreditCard /> */}
                      <Text style={globalStyles.textBold}>
                        BCA Virtual Account
                      </Text>
                    </View>
                    <ChevronRight />
                  </TouchableOpacity>
                </View>
              </View>
              {/* end of payment method */}
              {/* start of voucher input */}
              <View>
                <View style={styles.contentTitleContainer}>
                  <Text style={globalStyles.contentTitle}>Voucher</Text>
                </View>
                <View style={styles.voucherSelectContainer}>
                  <TextInput
                    style={styles.voucherInput}
                    placeholder="Masukan kode di sini"
                  ></TextInput>
                  <TouchableOpacity>
                    <View style={styles.selectVoucherButtonItemsContainer}>
                      <View style={styles.selectVoucherButtonText}>
                        <View style={styles.voucherIcon}>
                          <Voucher />
                        </View>
                        <Text style={globalStyles.textBold}>Pilih voucher</Text>
                      </View>
                      <ChevronRight />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              {/* end of voucher input */}
              {/* start of payment recap */}
              <View>
                <View style={styles.contentTitleContainer}>
                  <Text style={globalStyles.contentTitle}>
                    Ringkasan Pembayaran
                  </Text>
                </View>
                <View style={globalStyles.listContainer}>
                  <View style={styles.paymentDetailsContainer}>
                    <View style={styles.paymentDetailsContentContainer}>
                      <Text style={globalStyles.textBold}>Harga ticket</Text>
                      {DATA[id].children.map((child, id) => (
                        <View key={id} style={styles.paymentItemsContainer}>
                          <Text>
                            {child.duration + ' Jam - Gelang ' + child.type}{' '}
                            (x1)
                          </Text>
                          <Text style={globalStyles.textBold}>
                            IDR{' '}
                            {child.totalPrice
                              .toString()
                              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')}
                          </Text>
                        </View>
                      ))}
                    </View>
                    <View style={styles.paymentDetailsContentContainer}>
                      <Text style={globalStyles.textBold}>Harga tambahan</Text>
                      <View style={styles.paymentItemsContainer}>
                        <Text>
                          Tambahan Kaos Kaki (x{DATA[id].addons[0].qty})
                        </Text>
                        <Text style={globalStyles.textBold}>
                          IDR {DATA[id].addons[0].totalPrice}
                        </Text>
                      </View>
                      <View style={styles.paymentItemsContainer}>
                        <Text>Tambahan Gelang Dewasa (x2)</Text>
                        <Text style={globalStyles.textBold}>
                          IDR{' '}
                          {DATA[id].adult[0].totalPrice
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.orderDescriptionFooter}>
                    <View style={styles.paymentDetailsFooter}>
                      <Text style={globalStyles.textMedium}>
                        Total Pembayaran
                      </Text>
                      <Text style={globalStyles.textBold}>
                        IDR{' '}
                        {DATA[Number(id)].totalPayment
                          .toString()
                          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* end of payment recap */}
              {/* BOTTOM BAR */}
              <View style={styles.bottomBar}>
                <View style={styles.bottomBarContentContainer}>
                  <View>
                    <Text>Subtotal</Text>
                    <Text style={globalStyles.textBold}>
                      IDR{' '}
                      {DATA[Number(id)].totalPayment
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')}
                    </Text>
                  </View>
                  <View style={styles.playMilesContainer}>
                    <View style={styles.awardBadge}>
                      <Award />
                    </View>
                    <Text>Dapat 57 PLAYMILES</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => dispatch(process('waiting'))}
                  style={styles.bottomBarButtonPink}
                >
                  <Text style={globalStyles.textMediumWhite}>
                    Lanjutkan Pembayaran
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        ) : DATA[id].status === 'unpaid' && paymentProcess === 'waiting' ? (
          <View>
            <ScrollView contentInset={{ bottom: 60, top: 0 }}>
              <Text style={globalStyles.screenTitle}>
                Selesaikan Pembayaran
              </Text>
              <View style={globalStyles.listContainer}>
                <View style={styles.orderDescriptionContainer}>
                  <View>
                    <Text>No. Pesanan</Text>
                    <Text style={globalStyles.textBold}>{DATA[id].id}</Text>
                  </View>
                  <View>
                    <Text>Outlet</Text>
                    <View style={styles.locationPoint}>
                      <MapPin />
                      <Text style={globalStyles.textBold}>Lippo Mall Puri</Text>
                    </View>
                  </View>
                  <View>
                    <Text>Tanggal Berlaku Ticket</Text>
                    <View style={styles.locationPoint}>
                      <Calendar />
                      <Text style={globalStyles.textBold}>{DATA[id].date}</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* start of order list */}
              <View>
                <View style={styles.contentTitleContainer}>
                  <Text style={globalStyles.contentTitle}>
                    Metode Pembayaran
                  </Text>
                </View>
                <View style={globalStyles.listContainer}>
                  <View style={styles.orderDetailsHeader}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      <Timer />
                      <Text style={{ color: '#005474' }}>
                        Selesaikan Pembayaran
                      </Text>
                    </View>
                    <View>
                      <View style={{ flexDirection: 'row', gap: 2 }}>
                        <View style={styles.timerCard}>
                          <Text style={globalStyles.textMediumWhite}>
                            {hours && hours < 10 ? `0${hours}` : hours}
                          </Text>
                        </View>
                        <Text style={globalStyles.textMediumOrange}>:</Text>
                        <View style={styles.timerCard}>
                          <Text style={globalStyles.textMediumWhite}>
                            {minutes && minutes < 10 ? `0${minutes}` : minutes}
                          </Text>
                        </View>
                        <Text style={globalStyles.textMediumOrange}>:</Text>
                        <View style={styles.timerCard}>
                          <Text style={globalStyles.textMediumWhite}>
                            {seconds && seconds < 10 ? `0${seconds}` : seconds}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.orderDetailsContainer}>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                        }}
                      >
                        <BCA />
                        <Text style={globalStyles.textBold}>
                          BCA Virtual Account
                        </Text>
                        <Text style={globalStyles.textBold}>1</Text>
                      </View>
                    </View>
                    <View style={{ gap: 8 }}>
                      <View
                        style={{
                          backgroundColor: '#F3F3F3',
                          borderRadius: 8,
                          flexDirection: 'row',
                          alignContent: 'center',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          padding: 16,
                          gap: 16,
                        }}
                      >
                        <Text style={globalStyles.nunito16700}>
                          7 1201 0819 2772 7322
                        </Text>
                        <TouchableOpacity>
                          <Copy />
                        </TouchableOpacity>
                      </View>
                      <View style={{ gap: 8 }}>
                        <Text>Total Pembayaran</Text>
                        <Text style={globalStyles.nunito14700}>
                          IDR{' '}
                          {DATA[Number(id)].totalPayment
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.contentTitleContainer}>
                  <Text style={globalStyles.contentTitle}>
                    Instruksi Pembayaran
                  </Text>
                </View>
                <View style={styles.paymentInstructionContainer}>
                  <TouchableOpacity style={globalStyles.flexRowSpaceBetween}>
                    <Text style={globalStyles.textBoldMedium}>
                      Transfer Melalui ATM
                    </Text>
                    <ChevronDown />
                  </TouchableOpacity>
                  <TouchableOpacity style={globalStyles.flexRowSpaceBetween}>
                    <Text style={globalStyles.textBoldMedium}>
                      Transfer Melalui Internet Banking
                    </Text>
                    <ChevronDown />
                  </TouchableOpacity>
                  <TouchableOpacity style={globalStyles.flexRowSpaceBetween}>
                    <Text style={globalStyles.textBoldMedium}>
                      Transfer Melalui Mobile Banking
                    </Text>
                    <ChevronDown />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.bottomBar}>
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: 'purchases',
                    })
                  }
                  style={styles.bottomBarButtonBlue}
                >
                  <Text style={globalStyles.textMediumWhite}>
                    Lihat Daftar Pesanan
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: 'purchases',
                    })
                  }
                  style={styles.bottomBarButtonTransparent}
                >
                  <Text style={globalStyles.textMediumBlue}>
                    Ganti Metode Pembayaran
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        ) : DATA[id].status === 'unpaid' && paymentProcess === 'pending' ? (
          <View>
            <ScrollView contentInset={{ bottom: 60, top: 0 }}>
              <Text style={globalStyles.screenTitle}>Metode Pembayaran</Text>
              <View style={styles.orderDetails}>
                <View style={{ gap: 8 }}>
                  <Text style={globalStyles.textRegular}>Total Pembayaran</Text>
                  <Text style={globalStyles.textBoldMedium}>
                    IDR{' '}
                    {DATA[Number(id)].totalPayment
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: 'order/[id]',
                      params: { id: id },
                    })
                  }
                >
                  <Text style={styles.orderDetailsTextBlue}>
                    Detail Pesanan
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={globalStyles.contentTitle}>
                  Pembayaran Langsung
                </Text>
                <View style={globalStyles.listContainer}>
                  <TouchableOpacity style={styles.paymentProviderContainer}>
                    <View style={styles.paymentProvider}>
                      <View style={styles.paymentProviderWalletIcon}>
                        <Gopay />
                      </View>
                      <View>
                        <Text style={globalStyles.textBold}>Gopay</Text>
                        <Text>Saldo: Rp37.500</Text>
                      </View>
                    </View>
                    <RadioButton />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.paymentProviderContainer}>
                    <View style={styles.paymentProvider}>
                      <View style={styles.paymentProviderWalletIcon}>
                        <ShopeePay />
                      </View>
                      <View>
                        <Text style={globalStyles.textBold}>Gopay</Text>
                        <Text>Saldo: Rp37.500</Text>
                      </View>
                    </View>
                    <RadioButton />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.paymentProviderContainer}>
                    <View style={styles.paymentProvider}>
                      <View style={styles.paymentProviderWalletIcon}>
                        <Ovo />
                      </View>
                      <View>
                        <Text style={globalStyles.textBold}>Gopay</Text>
                        <Text>Saldo: Rp37.500</Text>
                      </View>
                    </View>
                    <RadioButton />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={globalStyles.contentTitle}>Virtual Account</Text>
                <View style={globalStyles.listContainer}>
                  <TouchableOpacity
                    onPress={() => dispatch(process('confirming'))}
                    style={styles.paymentProviderContainer}
                  >
                    <View style={styles.paymentProvider}>
                      <BCA style={styles.paymentProviderBankIcon} />
                      <Text style={globalStyles.textBold}>
                        BCA Virtual Account
                      </Text>
                    </View>
                    <RadioButton />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.paymentProviderContainer}>
                    <View style={styles.paymentProvider}>
                      <Mandiri style={styles.paymentProviderBankIcon} />
                      <Text style={globalStyles.textBold}>
                        Mandiri Virtual Account
                      </Text>
                    </View>
                    <RadioButton />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.paymentProviderContainer}>
                    <View style={styles.paymentProvider}>
                      <BRI style={styles.paymentProviderBankIcon} />
                      <Text style={globalStyles.textBold}>
                        BRI Virtual Account
                      </Text>
                    </View>
                    <RadioButton />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.paymentProviderContainer}>
                    <View style={styles.paymentProvider}>
                      <BNI style={styles.paymentProviderBankIcon} />
                      <Text style={globalStyles.textBold}>
                        BNI Virtual Account
                      </Text>
                    </View>
                    <RadioButton />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={globalStyles.contentTitle}>Kartu Kredit</Text>
                <View style={globalStyles.listContainer}>
                  <TouchableOpacity style={styles.paymentProviderContainer}>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 16,
                        alignContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <CreditCard style={styles.paymentCreditCard} />
                      <View>
                        <Text style={globalStyles.textBold}>Kartu Kredit</Text>
                        <Text style={{ fontFamily: 'DarkerGrotesque' }}>
                          Visa, Mastercard, AMEX, JCB
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        ) : (
          <Text> ERROR </Text>
        )}
      </View>
    </SafeAreaView>
  );
}
