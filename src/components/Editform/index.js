import React, {useRef, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';

//style
import styles from './styled';

//data
import data from '../../asset/data.json';

// Import vector icons
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Editform = ({item}) => {
  const navigation = useNavigation();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  const [id, setId] = useState(item.id);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');

  useEffect(() => {
    setFirstName(item.firstName);
    setLastname(item.lastName);
  });

  const handleOnclick = () => {
    navigation.navigate('Screen1');
  };
  const navigationtoScreen1 = () => {
    navigation.navigate('Screen1', {id, firstNameInput, lastNameInput});
  };
  const handleOnsubmit = () => {
    // console.log(firstNameInput);
    if (firstNameInput == '') {
      setFirstNameInput(firstName);
    }
    if (lastNameInput == '') {
      setLastNameInput(lastName);
    }
    navigationtoScreen1();
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.mainContainerToolBar}>
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
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <IconMaterial
            name="lens"
            color="#ff8c00"
            size={150}
            style={styles.icon1}></IconMaterial>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Main Information</Text>
          <View style={styles.editContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.subTitle}>First Name</Text>
              <TextInput
                style={styles.input}
                returnKeyType="next"
                defaultValue={firstName}
                onChangeText={newValue => setFirstNameInput(newValue)}
                onSubmitEditing={() => ref_input2.current.focus()}
              />
            </View>
            <Divider />
            <View style={styles.rowContainer}>
              <Text style={styles.subTitle}>Last Name</Text>
              <TextInput
                style={styles.input}
                returnKeyType="next"
                defaultValue={lastName}
                onChangeText={newValue => setLastNameInput(newValue)}
                onSubmitEditing={() => ref_input3.current.focus()}
                ref={ref_input2}
              />
            </View>
          </View>

          <Text style={styles.title}>Sub Information</Text>
          <View style={styles.editContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.subTitle}>Email</Text>
              <TextInput
                style={styles.input}
                returnKeyType="next"
                defaultValue={item.email}
                onSubmitEditing={() => ref_input4.current.focus()}
                ref={ref_input3}
              />
            </View>
            <Divider />
            <View style={styles.rowContainer}>
              <Text style={styles.subTitle}>Phone</Text>
              <TextInput
                style={styles.input}
                defaultValue={item.phone}
                ref={ref_input4}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Editform;
