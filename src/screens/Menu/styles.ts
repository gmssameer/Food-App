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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    // flex: 1,
    textAlignVertical: 'center',
    paddingVertical: 8,
  },
  desc: {
    fontSize: 15,
  },
  ingredients: {
    fontSize: 12,
  },
  descContainer: {
    padding: 10,
  },
  modalContainer: {
    height: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeaderCloseText: {
    // textAlign: 'center',
    // left: 5,
    // paddingRight: 5,
  },
  tapMore: {
    fontSize: 10,
    // backgroundCol  or: 'blue',
  },
  choice: {
    alignSelf: 'center',
    padding: 8,
    fontSize: 16,
    fontWeight: '800',
  },
  toppingsContainer: {
    width: '85%',
    alignSelf: 'center',
  },
  checkboxText: {
    textDecorationLine: 'none',
  },

  checkboxContainer: {
    flexDirection: 'row',
    padding: 9,
  },
  toppingName: {
    paddingHorizontal: 5,
    flex: 2,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#00000080',
  },
  toppingPrice: {
    flex: 1,
    paddingHorizontal: 5,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: '#00000080',
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
