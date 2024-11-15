import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface PromotionCardProps {
  text: string;
  image: string;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ text, image }) => (
  <View style={styles.card}>
    <Image style={styles.image} source={{ uri: image }} resizeMode="contain" />
    <Text style={styles.textoCard}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2d2d2d',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  textoCard: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 300, 
    borderRadius: 8,
  },
});

export default PromotionCard;