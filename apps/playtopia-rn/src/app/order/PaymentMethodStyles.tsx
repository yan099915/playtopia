import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  orderDetails: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#E5F8FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },

  paymentProviderContainer: {
    padding: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },

  paymentProvider: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  paymentProviderWalletIcon: {
    alignContent: 'center',
    alignItems: 'center',
    minWidth: 32,
  },

  paymentProviderBankIcon: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    minWidth: 40,
    minHeight: 40,
  },

  paymentCreditCard: {
    minWidth: 22,
    margin: 5,
  },

  orderDetailsTextBlue: {
    fontSize: 16,
    color: '#00ADEE',
  },
});

export default styles;
