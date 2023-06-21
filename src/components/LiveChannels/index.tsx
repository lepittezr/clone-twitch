import React from 'react';
import { View, ScrollView, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';

import live1 from '../../images/Lives/live1.png';
import live2 from '../../images/Lives/live2.png';
import live3 from '../../images/Lives/live3.png';
import live4 from '../../images/Lives/live4.png';
import live5 from '../../images/Lives/live5.png';
import live6 from '../../images/Lives/live6.png';

import user1 from '../../images/Users/user1.jpg';
import user2 from '../../images/Users/user2.jpg';
import user3 from '../../images/Users/user3.jpg';
import user4 from '../../images/Users/user4.jpg';
import user5 from '../../images/Users/user5.jpg';
import user6 from '../../images/Users/user6.jpg';



const LiveChannels = () => {
  const data = [
    {
      id: '1',
      image: live1,
      userImage: user1,
      title: 'Bawkbasoup',
      subtitle: 'WE DO IT TODAY || Hardest',
      game: 'Resident Evil 2',
      tags: ['GodGamer', 'GamerGod'],
      iconText: '2.4K',
    },
    {
      id: '2',
      image: live2,
      userImage: user2,
      title: 'Orchlon',
      subtitle: 'Must PB Before Dead Space',
      game: 'Resident Evil 2',
      tags: ['Speedrun', 'Bajej'],
      iconText: '479',

    },
    {
      id: '3',
      image: live3,
      userImage: user3,
      title: 'MattDaRoc',
      subtitle: '[No Damage] (0/12 Done)',
      game: 'Outlast',
      tags: ['English', 'NoHit', 'NoDamege'],
      iconText: '190',

    },
    {
      id: '4',
      image: live4,
      userImage: user4,
      title: 'Alanzoka',
      subtitle: 'Gameplay Fortnite 20/03',
      game: 'Fortnite',
      tags: ['Games'],
      iconText: '22.4K',
    },
    {
      id: '5',
      image: live5,
      userImage: user5,
      title: 'NoobCBL',
      subtitle: 'Em busca do level 200!',
      game: 'CABAL Online',
      tags: ['Gameplays', 'Up'],
      iconText: '1.3K',
    },
    {
      id: '6',
      image: live6,
      userImage: user6,
      title: 'CabalZOR',
      subtitle: 'Farmando em TROPA',
      game: 'CABAL Online',
      tags: ['Farm', 'farmando', 'Cabal', 'COBR'],
      iconText: '486',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle} />
        <Text style={styles.iconText}>{item.iconText}</Text>
      </View>
        <View style={styles.userImageContainer}>
        <View style={styles.text}>
        </View>
          <Text 
          style={styles.title}>{item.title}
          <Image source={item.userImage} style={styles.userImage} />
          </Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.game}>{item.game}</Text>
          {item.tags && item.tags.length > 0 && (
            <View style={styles.tagContainer}>
              {item.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>
                  {tag}
                </Text>
              ))}
            </View>
          )}
        </View>
      </View>
  );

  return (
    <View style={styles.container}>

      <ScrollView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default LiveChannels;
