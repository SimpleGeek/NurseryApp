import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 350,
        marginTop: 100
      },
      header: {
        fontSize: 30
      },
      input: {
        height: 40,
        width: '80%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor: 'lightgray',
        fontSize: 18
      }
});

export default Styles;