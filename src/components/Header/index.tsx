import React from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';


const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Ionicons name="md-person-circle" size={40} color="purple" />
            </View>

            <View style={styles.rightSide}>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons name="video-outline" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="file-tray-outline" size={26} color="black" />
                </TouchableOpacity >
                <TouchableOpacity style={styles.button}>
                    <MaterialIcons name="chat-bubble-outline" size={26} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Feather name="search" size={26} color="black" />
                </TouchableOpacity>

            </View>

        </View>
    )
};

export default Header;