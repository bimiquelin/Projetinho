import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.address}>Endereço: Rua dos bobos, número 0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
  },
  address: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
});