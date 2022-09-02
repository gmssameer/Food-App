import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFE44A',
    // margin: 10,
    flex: 1,
    // height: '10  0%',
  },
  scrollContainer: {
    marginBottom: 100,
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
  detailsContainer: {
    paddingHorizontal: 10,
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  avgPrice: {
    fontWeight: '700',
  },
  estTime: {
    marginLeft: 10,
    fontStyle: 'italic',
  },
  buttonOpen: {
    width: 100,
  },
  textStyle: {
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'left',
    fontStyle: 'italic',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  pickerView: {
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 26,
    width: 180,
    height: 50,
  },
  picker: {
    height: 50,
    fontSize: 15,
    textAlign: 'center',
  },
  pickerItem: {
    width: 200,
    fontWeight: '100',
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
  testContainer: {
    width: 200,
    backgroundColor: 'blue',
    height: 200,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default styles;
