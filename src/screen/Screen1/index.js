import React from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';

//style
import styles from './styled';

//components
import Toolbar from '../../components/Toolbar';
import List from '../../components/List';

const Screen1 = option => {
  return (
    <SafeAreaView style={styles.container}>
      <Toolbar />
      {/* <ScrollView style={styles.scrollView}> */}
      <List option={option} />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
export default Screen1;
