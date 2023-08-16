import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_300Light, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Login } from './src/screens/Login';
import { Loading } from './src/screens/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Login/>
      <StatusBar style="auto" />
    </>
  );
}
