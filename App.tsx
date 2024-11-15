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
        <Text style={styles.apostaEspecial}>Aposte agora nos mercados especiais!</Text>
        <PromotionCard
          text="Campeão do super Mundial 2025"
          image="https://conteudo.imguol.com.br/c/esporte/bf/2024/08/22/times-classificados-para-o-super-mundial-de-clubes-de-2025-1724347565579_v2_750x421.jpg"
        />
        <PromotionCard
          text="Quem ganhará a Libertadores?"
          image="https://upload.wikimedia.org/wikipedia/pt/5/53/Cartaz_Final_da_Libertadores_2024.jpg"
        />
        <PromotionCard
          text="Quem sera o campeão da Champions League?"
          image="https://t2.tudocdn.net/620371?w=1920&h=1440"
        />
      </View>

      <Text style={styles.tituloSessao}>Promoções de Game Show</Text>
      <View style={styles.gameShowsContainer}>
        <GameCard title="Meio Custo" minBet="R$0,75" />
        <GameCard title="Custo cheio" minBet="R$1,50" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  containerPromocao: {
    padding: 30,
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
  apostaEspecial: {
    color: '#00ff6a',
    marginBottom: 15,
    fontSize: 20,
    marginLeft: 18
  }
});

export default App;

