import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  infoContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    // alignContent: 'center',
  },
  rowContainer: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  editContainer: {
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  icon1: {
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
  },
  subTitle: {
    flex: 1,
    fontSize: 18,
  },
  input: {
    flex: 2,
    width: '100%',
    height: 35,
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: '#D5D5D5',
    borderWidth: 2,
    borderRadius: 10,
  },
  mainContainerToolBar: {
    // flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
  },
  icon2: {
    height: 50,
    backgroundColor: 'white',
  },
  contactTitle: {
    // flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#ff8c00',
    marginHorizontal: 10,
    // fontWeight: 'bold',
  },
});

export default styles;
