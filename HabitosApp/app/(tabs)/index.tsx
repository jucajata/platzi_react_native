import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { ejemploDesestructuracionUsuario } from '../../utils/math';

export default function HomeScreen() {

  const nombre = "Juan";
  const edad = 30;
  const isPremium = true;
  const messages = 5;
  const fecha = new Date();
  const hora = fecha.getHours();
  const saludo =
    hora < 12 ? "Buenos días" :
      hora < 18 ? "Buenas tardes" :
        "Buenas noches";

  return (
    <View style={styles.container}>
      <Text>Hola, {nombre}</Text>
      <Text>En 10 años, {edad + 10}</Text>
      <Text>{isPremium ? "Usuario premium" : "Usuario gratuito"}</Text>
      {messages > 0 && <Text>Tienes {messages} mensajes</Text>}
      <Text style={styles.title}>Mi primera app con react native</Text>
      <Text style={styles.subtitle}>Guarda y ves el cambio al instante</Text>
      <Link href="/(tabs)/about">Ir a sobre mi</Link>
      <Text>{saludo}</Text>
      <Text>{ejemploDesestructuracionUsuario()}</Text>
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
