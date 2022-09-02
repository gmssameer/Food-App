import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFE44A',
    height: '100%',
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
  titleContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlignVertical: 'center',
    paddingLeft: 5,
  },
  location: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  ratingCircle: {
    // flex:1,
    height: 40,
    width: 40,
    borderRadius: 100,
    color: 'white',
    borderColor: 'black',
    backgroundColor: '#C4C4C4',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  title2: {
    margin: 10,
    paddingHorizontal: 20,
    textShadowColor: 'grey',
    fontSize: 22,
    fontWeight: '700',
  },
  title3: {
    // paddingHorizontal: 30,
    textShadowColor: 'grey',
    color: '#000',
    fontSize: 15,
    fontWeight: '800',
  },
  title4: {
    // paddingHorizontal: 30,
    textShadowColor: 'grey',
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  desc: {
    // paddingLeft: 20,
    paddingVertical: 10,
    fontSize: 12,
    fontWeight: '500',
  },
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  leftContainer: {
    flex: 3,
  },
  middleContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
  totalPrice: {
    alignItems: 'center',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  pickerView: {
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  pickerItem: {
    // height: 50,
    width: '100%',
    fontSize: 18,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    // backgroundColor: 'blue',
    flexDirection: 'row',
  },
  chechboxLeft: {
    flex: 4,
  },
  checkboxRight: {
    flex: 1,
  },
  desc2: {
    fontSize: 12,
    fontWeight: '500',
  },
  total: {
    // paddingHorizontal: 10,
    marginHorizontal: 50,
    paddingVertical: 10,
  },
  subTotal: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  subTotal1: {
    flex: 2,
  },
  subTotal2: {
    flex: 1,
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
