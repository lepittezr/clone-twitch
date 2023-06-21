import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { styles } from './styles'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '../../components/Header/index';
import Followed from '../../components/Followed/index';
import LiveChannels from '../../components/LiveChannels';

const FollowingScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.following}>Following</Text>
            <Text style={styles.title}>Followed Categories</Text>

            <Followed />

            <Text style={styles.liveChannel}>Your Live Channels</Text>

            <LiveChannels />


            <View style={styles.barraNav}>
                <TouchableOpacity style={styles.tab}>
                    <Ionicons name="md-heart" size={24} color="#6440a0" />
                    <Text style={[styles.label, styles.followingText]}>Following</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Ionicons name="compass-outline" size={24} color="#000000" />
                    <Text style={styles.label}>Discover</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <MaterialCommunityIcons name="content-copy" size={24} color="#000000" />
                    <Text style={styles.label}>Browse</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Ionicons name="trophy-outline" size={24} color="#000000" />
                    <Text style={styles.label}>Esports</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default FollowingScreen;