import * as React from 'react';
import { Text, View, TextInput } from 'react-native';
import Styles from '../styles/Styles.js';
import AppButton from './AppButton.js';
import Confirm from './Confirm.js';

const Checkin = ({ route, navigation }) => {
    const [showConfirm, setShowConfirm] = React.useState(false);
    return (
        <View style={Styles.container}>
            <Text style={{...Styles.header, marginBottom: 15}}>Call Number</Text>
            <TextInput
                style={{...Styles.input, marginBottom: 15}}
                placeholder="Call Number"
            />
            <AppButton
                title="Check In"
                onPress={() => navigation.navigate('Confirm')}
            />
        </View>
    );
}

export default Checkin;