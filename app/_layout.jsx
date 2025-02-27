import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index" options={{ title: 'Sign In'}} />
    <Stack.Screen name="Locations" options={{ title: 'Locations'}} />
    <Stack.Screen name="AddLocation" options={{ title: 'Add location'}} />
    <Stack.Screen name="MapView" options={{ title: 'Location on map'}} />
  </Stack>
  );
}
