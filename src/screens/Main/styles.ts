import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#FFE44A',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 3,
    top: 100,
  },
  image: {
    resizeMode: 'stretch',
    height: 150,
    width: 150,
  },
  tagLine1: {
    top: 80,
    alignSelf: 'center',
  },
  tagLineText1: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  tagLine2: {
    top: 80,
    // left: 200,
    marginRight: 50,
    alignSelf: 'flex-end',
  },
  tagLineText2: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    top: 110,
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
    fontSize: 24,
    fontWeight: '100',
    fontFamily: 'Roboto',
    backgroundColor: '#FFFFFF',
  },
  ImageIconStyle: {
    marginVertical: 12,
    marginHorizontal: 10,
    // width: 25,
  },
  container: {
    // alignSelf: 'center',
    // backgroundColor: 'blue',
    height: 100,
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
