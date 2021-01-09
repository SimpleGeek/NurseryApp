import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import AppButton from './AppButton.js';
import Styles from '../styles/Styles.js';

const Login = ({ route, navigation }) => {
    return (
        <View style={Styles.container}>
            <Text style={{...Styles.header, marginBottom: 15}}>Login</Text>
            <TextInput
                style={{...Styles.input, marginBottom: 15}}
                placeholder="Username"
            />
            <TextInput
                style={{...Styles.input, marginBottom: 15}}
                placeholder="Password"
            />
            <AppButton
                title="Login"
                onPress={() => navigation.navigate('Check In')}
            />
        </View>
    );
}

export default Login;