import * as React from 'react';
import { Text, View, Image } from 'react-native';
import Styles from '../styles/Styles.js';
import AppButton from './AppButton.js';

const Confirm = ({ route, navigation }) => {
    return (
        <View style={Styles.container}>
            <Text style={{...Styles.header, marginTop: 60}}>Confirm</Text>
            <Image
                source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
                style={{width: 100, height: 100}}
            />
            <Image
                source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
                style={{width: 100, height: 100}}
            />
            <AppButton
                title="Is this correct?"
                onPress={() => navigation.navigate('Check In')}
            />
        </View>
    );
}

export default Confirm;