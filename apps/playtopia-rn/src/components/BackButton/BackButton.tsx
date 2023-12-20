import { TouchableOpacity } from 'react-native';
import React from 'react';
import globalStyles from '../../assets/styles/globalStyles';

import ArrowLeft from '../../assets/icons/arrow-left.svg';
import { router } from 'expo-router';

export default function BackButton() {
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={globalStyles.backButton}
    >
      <ArrowLeft />
    </TouchableOpacity>
  );
}
