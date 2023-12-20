import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/Colors';

const styles = StyleSheet.create({
  contentTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginHorizontal: 16,
  },

  contentTitleContainer: {
    paddingTop: 8,
  },

  locationPoint: {
    textAlign: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 8,
    gap: 8,
  },

  orderDescriptionFooter: {
    backgroundColor: '#F3F3F3',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%',
  },

  orderDescriptionContainer: {
    padding: 16,
    gap: 12,
  },

  orderDetailsHeader: {
    backgroundColor: '#E5F8FF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },

  orderDetailsContainer: {
    margin: 16,
    gap: 16,
  },

  orderDetailsList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  selectButton: {
    padding: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonContentContainer: {
    marginLeft: 13,
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 20,
  },

  voucherSelectContainer: {
    borderRadius: 16,
    backgroundColor: '#E1F4FB',
    paddingVertical: 16,
    paddingHorizontal: 24,
    margin: 16,
    gap: 16,
  },

  voucherInput: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    width: 'auto',
  },

  voucherIcon: {
    width: 40,
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B7EBFF',
  },

  selectVoucherButtonItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  selectVoucherButtonText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  line: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
  },

  paymentDetailsContainer: {
    margin: 16,
    gap: 16,
  },

  paymentDetailsContentContainer: {
    gap: 16,
  },

  paymentItemsContainer: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  paymentDetailsFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bottomBar: {
    padding: 16,
    gap: 8,
  },

  bottomBarContentContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },

  playMilesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 16,
    paddingLeft: 8,
    paddingRight: 10,
    paddingVertical: 4.5,
    gap: 4,
    backgroundColor: '#FFB7E2',
  },

  awardBadge: {
    padding: 4,
    borderRadius: 16,
    backgroundColor: '#FFDD15',
  },

  bottomBarButtonTransparent: {
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },

  bottomBarButtonBlue: {
    backgroundColor: '#00ADEE',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },

  bottomBarButtonPink: {
    backgroundColor: '#EB008B',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },

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

  timerCard: {
    borderRadius: 4,
    padding: 4,
    backgroundColor: COLORS.error500,
  },

  orderDetailsTextBlue: {
    fontSize: 16,
    color: '#00ADEE',
  },

  paymentInstructionContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 32,
    gap: 32,
  },
});

export default styles;
