import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => (
  <View style={styles.header}>
    <View style={styles.navNomes}>
      <Text style={styles.navNome}>Esportes</Text>
      <Text style={[styles.navNome, styles.navLinkActive]}>Cassino Ao-Vivo</Text>
      <Text style={styles.navNome}>Jogos</Text>
      <Text style={styles.navNome}>Pôquer</Text>
      <Text style={styles.navNome}>Bingo</Text>
    </View>

    <View style={styles.LogoCentro}>
      <Text style={styles.logoTexto}>BetTeldison</Text>
    </View>

    <View style={styles.botoesLinks}>
      <Text style={styles.botaoLink}>Registre-se</Text>
      <Text style={styles.botaoLink}>Login</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1c1c1c',
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 60
  },
  navNomes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  navNome: {
    color: '#888',
    fontSize: 14,
    paddingVertical: 4,
  },
  navLinkActive: {
    color: '#00ff6a',
    fontWeight: 'bold',
    borderBottomColor: '#00ff6a',
    borderBottomWidth: 2,
  },
  LogoCentro: {
    marginVertical: 8,
  },
  logoTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botoesLinks: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: -20,  
  },
  botaoLink: {
    color: '#00ff6a',
    fontSize: 14,
    marginLeft: 16,
  },
});

export default Header;