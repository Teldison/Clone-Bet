import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar: React.FC = () => (
  <View style={styles.pesquisa}>
    <TextInput placeholder="Pesquisar" placeholderTextColor="#888" style={styles.searchInput} />
  </View>
);

const styles = StyleSheet.create({
  pesquisa: {
    padding: 8,
    backgroundColor: '#1c1c1c',
  },
  searchInput: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
  },
});

export default SearchBar;