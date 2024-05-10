import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView,
  FlatList
 } from 'react-native';
import pokemonList from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <FlatList 
          data={pokemonList} 
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          ListEmptyComponent={<Text style={styles.emptyListText}>No Pokemon Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
          ListFooterComponent={<Text style={styles.footerText}>End of list</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 35,
  },

  scrollView: {
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },

  cardText: {
    fontSize: 30,
  },

  emptyListText: {
    fontSize: 30,
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },

  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },

  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
});
