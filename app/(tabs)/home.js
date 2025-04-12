import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Three Tabs App!</Text>
      <Text style={styles.description}>
        This is a simple demo app showcasing tabs navigation in React Native using Expo Router.
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Features:</Text>
        <Text style={styles.infoText}>• Bottom Tab Navigation</Text>
        <Text style={styles.infoText}>• Profile Information</Text>
        <Text style={styles.infoText}>• Settings Configuration</Text>
      </View>
      <Text style={styles.instruction}>
        Use the tabs below to navigate between different sections of the app.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#34495e',
  },
  infoContainer: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#34495e',
  },
  instruction: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#7f8c8d',
  },
});