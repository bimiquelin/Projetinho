import { View, Text, Image, StyleSheet } from 'react-native';

const items = [
  { id: 1, image: require('../assets/nike_1.jpg'), description: 'Air Force 1 x Slam Jam', price: 'R$ 8000,00' },
  { id: 2, image: require('../assets/nike_2.jpg'), description: 'Air Force 1 07 Pro-Tech', price: 'R$ 30000,00' },
  { id: 3, image: require('../assets/nike_3.jpg'), description: 'Air Force 1 07 Mid', price: 'R$ 15000,00' },
];

export default function Vitrine2() {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <View key={item.id} style={styles.card}>
         <Image source={item.image} style={styles.image} />
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e9ecef',
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#2a9d8f',
  },
});
