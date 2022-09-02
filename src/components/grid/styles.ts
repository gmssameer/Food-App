import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'blue',
    margin: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '44%',
    height: 100,
  },
  imageContainer: {
    overflow: 'hidden',
  },
  image: {
    position: 'relative',
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default styles;
