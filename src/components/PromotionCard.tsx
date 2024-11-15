import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PromotionCardProps {
  text: string;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ text }) => (
  <View style={styles.card}>
    <Text style={styles.textoCard}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2d2d2d',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  textoCard: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default PromotionCard;