import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 60,
    width: '90%',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    // flex: 1,
    borderRadius: 20,
    margin: 10,
  },
  textInputStyleClass: {
    flex: 1,
    borderRadius: 20,
    fontSize: 20,
    fontWeight: '100',
    fontFamily: 'Roboto',
    backgroundColor: '#FFFFFF',
  },
  ImageIconStyle: {
    marginVertical: 12,
    marginHorizontal: 10,
    // width: 25,
  },
});

export default styles;
