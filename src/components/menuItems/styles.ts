import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {},
  rootContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    height: 150,
    // backgroundColor: 'blue',
    // flex: 1,
  },
  leftSide: {
    flex: 1,
    // width: 120,
  },
  title: {
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

  rightSide: {},
  imageContainer: {
    borderRadius: 7,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
  },
  cust: {
    fontSize: 10,
    alignItems: 'center',
    textAlign: 'center',
    color: '#898989',
  },
});

export default styles;
