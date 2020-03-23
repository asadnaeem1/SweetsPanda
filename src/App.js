import React from 'react';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import MainNavigation from './navigation';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Montserrat-Regular',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E36B0B',
    secondary: '#B0B1B0',
    accent: '#e6e6e6',
    background: '#ffffff',
    surface: '#ffffff',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <MainNavigation />
    </PaperProvider>
  );
};

export default App;
