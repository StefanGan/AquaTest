import React from 'react';
import {Text, View} from 'react-native';

//screens
import Screen1 from './src/screen/Screen1';
import Screen2 from './src/screen/Screen2';

//navigator
import Navigator from './src/navigation';

const App: () => Node = () => {
  return <Navigator />;
};

export default App;
