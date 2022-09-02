import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        // borderWidth: 1,
        // borderColor: '#d1d1d1',
        borderRadius: 10,
        // backgroundColor: '#fff',
        marginHorizontal: 22,
        marginVertical:10,
        flexDirection: 'column',
      },
      imageContainer: {
        shadowOffset: {width: 10, height: 10},
        shadowColor: '#000',
        shadowOpacity: 1,
        overflow: 'hidden',
        borderRadius: 10,
        elevation: 10,
        backgroundColor: '#000',
      },
      image: {
        height: 160,
        resizeMode: 'stretch',
      },
      detailsContainer: {
        marginTop: 8,
      },
      titleContainer: {
        flexDirection: 'row',
      },
      ratingCircle: {
        // flex:1,
        height: 40,
        width: 40,
        borderRadius: 100,
        color:'white',
        borderColor: 'black',
        backgroundColor: '#C4C4C4',
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        // padding: 5,
        flex: 1,
      },
      location:{
        flex:1,
        // padding:5,
        textAlignVertical: 'center',
        alignSelf:'center'
        // justifyContent: 'flex-start',
        
      },
      descContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingLeft:5
      },
      delEstimate: {
        // justifyContent: 'flex-end',
        paddingLeft: 20,
        textAlign: 'right',
        flex: 1,
      },
});

export default styles;