import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#FFE44A',
  },
  imageContainer: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#000',
    shadowOpacity: 1,
    overflow: 'hidden',
    borderRadius: 2,
    elevation: 15,
    backgroundColor: '#000',
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 18,
    padding: 10,
    fontWeight: '800',
  },
  total: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  left: {
    flex: 1,
    // alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    // alignSelf: 'center',
    // backgroundColor: 'blue',
    height: 100,
    marginTop: 20,
    alignItems: 'center',
    // bottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
export default styles;
