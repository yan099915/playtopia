import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

export default function index() {
  return (
    <View>
      <SafeAreaView
        style={{
          height: '100%',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <View>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
