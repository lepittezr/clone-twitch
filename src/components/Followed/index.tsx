import React from 'react';
import { View, SafeAreaView, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

import residentEvil from '../../images/Games/residentEvil2.png';
import theThing from '../../images/Games/theThing.png';
import signalis from '../../images/Games/signalis.png';
import outlast from '../../images/Games/outlast.png';
import farCry from '../../images/Games/farCry.jpg';
import gtaV from '../../images/Games/gtaV.png';


const Followed = () => {
  const data = [
    { id: '1', title: 'Resident Evil 2', image: residentEvil, subtitle: '3,4K' },
    { id: '2', title: 'The Thing', image: theThing, subtitle: '5' },
    { id: '3', title: 'Signalis', image: signalis, subtitle: '128' },
    { id: '4', title: 'Outlast', image: outlast, subtitle: '23,8K'},
    { id: '5', title: 'Far Cry', image: farCry, subtitle: '3,8K'},
    { id: '6', title: 'GTA V', image: gtaV, subtitle: '13,8K'},


  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.iconContainer}>
        <Ionicons name="ellipse" size={10} color="red" style={styles.icon} />
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Followed;
