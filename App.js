import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Roboto_700Bold_Italic, Roboto_300Light, Roboto_400Regular } from "@expo-google-fonts/roboto";
import Home from "./screens/Home";
import Categoria from "./screens/Categoria";
import Produtos from "./screens/Produtos";
import DrawerMenu from "./DrawerMenu/DrawerMenu";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_700Bold_Italic,
    Roboto_300Light,
    Roboto_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerMenu" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="DrawerMenu"
          component={DrawerMenu}
          options={{ title: "HOME" }}
        />

        <Stack.Screen
          name="Categoria"
          component={Categoria}
          options={{ title: "CATEGORIA" }}
        />

        <Stack.Screen
          name="Produtos"
          component={Produtos}
          options={{ title: "PRODUTOS" }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              title: "",
              headerShown: false
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

