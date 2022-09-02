import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    // width: '82%',
    borderRadius: 15,
    // borderBottomEndRadius: 15,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    width: '82%',
    paddingHorizontal: 10,
    zIndex: 1,
    borderRadius: 20,
  },
  buttonText: {
    flex: 1,
    fontSize: 24,
    fontWeight: '100',
    fontFamily: 'Roboto',
    // textAlign: 'center',
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
});
export default styles;
