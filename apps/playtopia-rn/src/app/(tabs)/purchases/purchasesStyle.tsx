import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/Colors';

const purchasesStyle = StyleSheet.create({
  purchasesContainer: {
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },

  purchases: {
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderRadius: 16,
    borderColor: COLORS.greys100,
    gap: 8,
    padding: 16,
  },
});

export default purchasesStyle;
