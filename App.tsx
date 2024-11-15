import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import PromotionCard from './src/components/PromotionCard';
import GameCard from './src/components/GameCard';

const App: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />

      <View style={styles.containerPromocao}>
        <PromotionCard text="Aproveite as festas com prêmios em dinheiro e fichas douradas toda semana" />
        <PromotionCard text="Desafie no BlackJack Ao Vivo" />
      </View>

      <Text style={styles.tituloSessao}>Promoções de Game Show</Text>
      <View style={styles.gameShowsContainer}>
        <GameCard title="Meio Custo" minBet="R$0,75" />
        <GameCard title="Custo cheio" minBet="R$1,50" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',

  },
  containerPromocao: {
    padding: 16,
  },
  tituloSessao: {
    color: '#00ff6a',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
  },
  gameShowsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
  },
});

export default App;

