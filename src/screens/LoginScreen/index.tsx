import React from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import userIcon from '../../images/Icons/userIcon.png';
import passIcon from '../../images/Icons/passIcon.png';
import logo from '../../images/logo.png';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type LoginScreenNavigationProp = NavigationProp<any>;
const LoginScreen = () => {

    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handleLogin = () => {
        navigation.navigate('Following');
    };


    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.inputImg}>
                <Image
                    style={styles.image}
                    source={userIcon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="USERNAME"
                    placeholderTextColor={styles.placeholderText.color
                    }
                />
            </View>
            <View style={styles.inputImg}>
                <Image
                    style={styles.image}
                    source={passIcon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="PASSWORD"
                    placeholderTextColor={styles.placeholderText.color}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;
