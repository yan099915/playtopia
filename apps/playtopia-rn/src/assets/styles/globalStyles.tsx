import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/Metrics';
import { COLORS } from '../../utils/Colors';

const globalStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
  },

  pb16: {
    paddingVertical: verticalScale(16),
  },

  header: {
    height: 48,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },

  screenTitle: {
    fontSize: 20,
    fontWeight: '700',
    margin: 16,
  },

  nunito16700: {
    fontSize: 16,
    fontWeight: '700',
    // fontFamily: 'Nunito',
  },

  nunito14700: {
    fontSize: 14,
    // fontFamily: 'Nunito',
    fontWeight: '600',
  },

  textBold: {
    fontWeight: '700',
  },

  textRegular: {
    fontSize: 12,
  },

  contentTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginHorizontal: 16,
  },

  textBoldMedium: {
    fontSize: 14,
    fontWeight: '700',
  },

  textMedium: {
    fontSize: 16,
    fontWeight: '400',
  },

  textMediumBlue: {
    fontSize: 16,
    fontWeight: '400',
    color: '#00ADEE',
  },

  textMediumWhite: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FEFEFE',
  },

  backgroundGrays: {
    backgroundColor: '#F3F3F3',
  },

  textMediumOrange: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.error500,
  },

  flexRowSpaceBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  listContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 16,
  },

  backButton: {
    width: 40,
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#f3f3f3',
  },
});

export default globalStyles;
