import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Box, StatusBar, Text } from "native-base";
import { COLORS } from "./src/assets/Colors";
import RootNavigation from "./src/screens/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import NetInfo from "@react-native-community/netinfo";
import OfflineInfoHeader from "./src/components/OfflineInfoHeader";

export default function App() {
  const [isConnected, setIsConnected] = useState(false)
  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected)
    });

    // Unsubscribe
    return () => unsubscribe();
  }, [])

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <StatusBar backgroundColor={isConnected?COLORS.primary:COLORS.danger} />
        {isConnected?null:<OfflineInfoHeader/>}
        <RootNavigation />
      </Provider>
    </NativeBaseProvider>
  );
}