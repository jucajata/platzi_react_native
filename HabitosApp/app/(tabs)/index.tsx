import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi primera app con react native</Text>
      <Text style={styles.subtitle}>Guarda y ves el cambio al instante</Text>
      <Link href="/(tabs)/about">Ir a sobre mi</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F6FF",
    padding: 24,
    gap: 8
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A"
  },
  subtitle: {
    fontSize: 14,
    color: "#334155"
  }
});
