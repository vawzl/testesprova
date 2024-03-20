import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './Title/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Orgânico #8 - San Joe | Lourena | SóCiro - Ladeira da Vida [ Prod. Leo Casa 1 ]</Text>
      <Title/>
      <Button title='botao'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
