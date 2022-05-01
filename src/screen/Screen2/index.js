import React from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';

//style
import styles from './styled';

//components
import ToolbarEdit from '../../components/ToolbarEdit';
import Editform from '../../components/Editform';

const Screen2 = item => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ToolbarEdit item={item.route.params} /> */}
      {/* <ScrollView style={styles.scrollView}> */}
      <Editform item={item.route.params} />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
export default Screen2;
