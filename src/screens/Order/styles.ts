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

  menuTitle: {
    margin: 10,
    paddingHorizontal: 20,
    textShadowColor: 'grey',
    fontSize: 22,
    fontWeight: '700',
  },
  menuPicked: {
    paddingHorizontal: 30,
    textShadowColor: 'grey',
    color: '#666666',
    fontSize: 18,
    fontWeight: '700',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
  },
  itemDesc: {},
  orderTitle: {},
  orderDesc: {},
  orderImage: {
    width: 200,
    height: 100,
  },
  rootContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    height: 210,
    // backgroundColor: 'blue',
    // flex: 1,
  },
  leftSide: {
    flex: 1,
    // width: 120,
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    paddingLeft: 20,
    paddingVertical: 10,
    fontSize: 12,
    fontWeight: '500',
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 25,
    marginLeft: 20,
  },

  rightSide: {
    // flex: 2,
  },
  imageContainer2: {
    borderRadius: 7,
    elevation: 3,
    overflow: 'hidden',
  },
  image2: {
    width: 150,
    height: 150,
  },
  cust: {
    fontSize: 10,
    alignItems: 'center',
    textAlign: 'center',
    color: '#898989',
  },
  buttonContainer: {
    height: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default styles;
