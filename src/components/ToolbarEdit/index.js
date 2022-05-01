import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

//style
import styles from './styled';

import {useNavigation} from '@react-navigation/native';

const Toolbar = item => {
  const navigation = useNavigation();
  const handleOnclick = () => {
    navigation.navigate('Screen1');
  };
  const handleOnsubmit = () => {
    navigation.navigate('Screen1');
  };

  return (
    <View style={styles.mainContainer}>
      {/* <IconMaterial.Button
        name="search"
        color="#ff8c00"
        style={styles.icon1}></IconMaterial.Button> */}
      <TouchableOpacity onPress={() => handleOnclick()}>
        <Text style={styles.contactTitle}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOnsubmit()}>
        <Text style={styles.contactTitle}>Save</Text>
      </TouchableOpacity>

      {/* <IconMaterial.Button
        name="add"
        color="#ff8c00"
        style={styles.icon1}></IconMaterial.Button> */}
    </View>
  );
};
export default Toolbar;
