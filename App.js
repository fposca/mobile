import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Esta es la app de Fer Posca</Text>
      <Image
          style={{ width: 400, height: 400, marginBottom: 15 }}
          source={require("./assets/rick.png")}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: '#fff',
    fontSize: '2em',
    textAlign: 'center'

  }
});
