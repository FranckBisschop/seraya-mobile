import React from 'react';
import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from './components/ui/heading';
import { Box } from './components/ui/box';

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <Heading>Seraya Mobile</Heading>
        <Text>Seraya Mobile</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Box className="bg-primary-500 p-5">
          <Text className="text-typography-0">This is the Box</Text>
        </Box>
      </View>
    </GluestackUIProvider>
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
