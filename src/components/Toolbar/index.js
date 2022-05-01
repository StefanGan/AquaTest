import React from 'react';
import {Text, View} from 'react-native';

//style
import styles from './styled';

// Import vector icons
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const Toolbar = () => {
  return (
    <View style={styles.mainContainer}>
      <IconMaterial.Button
        name="search"
        color="#ff8c00"
        style={styles.icon1}></IconMaterial.Button>
      <Text style={styles.contactTitle}>Contacts</Text>
      <IconMaterial.Button
        name="add"
        color="#ff8c00"
        style={styles.icon1}></IconMaterial.Button>
    </View>
  );
};
export default Toolbar;
