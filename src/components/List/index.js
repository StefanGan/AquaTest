import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

//style
import styles from './styled';

//data
import data from '../../asset/data.json';

// Import vector icons
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const List = ({option}) => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [extraDataFL, setExtraDataFL] = useState();
  const options = option.route.params;
  console.log(option.route.params);

  const renderItems = ({item}) => {
    if (options) {
      {
        return options.id == item.id ? (
          <View style={styles.namecolumn}>
            <Text style={styles.firstnamespace}>{options.firstNameInput}</Text>
            <Text>{options.lastNameInput}</Text>
          </View>
        ) : (
          <View style={styles.namecolumn}>
            <Text style={styles.firstnamespace}>{item.firstName}</Text>
            <Text>{item.lastName}</Text>
          </View>
        );
      }
    } else {
      // console.log(item);
      return (
        <View style={styles.namecolumn}>
          <Text style={styles.firstnamespace}>{item.firstName}</Text>
          <Text>{item.lastName}</Text>
        </View>
      );
    }
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setExtraDataFL(data);

    wait(2000).then(() => setRefreshing(false));
    // wait(2000).then(() => setOnRefreshFL(false));
  }, []);

  const handleOnclick = item => {
    navigation.navigate('Screen2', item);
  };
  const Item = ({item}) => (
    <TouchableOpacity onPress={() => handleOnclick(item)}>
      <View style={styles.item}>
        <IconMaterial
          name="lens"
          color="#ff8c00"
          size={50}
          style={styles.icon1}></IconMaterial>

        {renderItems({item})}
      </View>
      <Divider />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={Item}
      extraData={extraDataFL}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};
export default List;
