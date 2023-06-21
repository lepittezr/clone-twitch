import React from 'react';
import { View, ScrollView, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';

import live1 from '../../images/Lives/live1.png';
import live2 from '../../images/Lives/live2.png';
import live3 from '../../images/Lives/live3.png';
import live4 from '../../images/Lives/live4.png';
import live5 from '../../images/Lives/live5.png';
import live6 from '../../images/Lives/live6.png';

const LiveChannels = () => {
  const data = [
    {
      id: '1',
      image: live1,
      title: 'Bawkbasoup',
      subtitle: 'WE DO IT TODAY || Hardest',
      game: 'Resident Evil 2',
      tags: ['GodGamer', 'GamerGod']
    },
    {
      id: '2',
      image: live2,
      title: 'Orchlon',
      subtitle: 'Must PB Before Dead Space',
      game: 'Resident Evil 2',
      tags: ['Speedrun', 'Bajej']
    },
    {
      id: '3',
      image: live3,
      title: 'MattDaRoc',
      subtitle: '[No Damage] (0/12 Done)',
      game: 'Outlast',
      tags: ['English', 'NoHit', 'NoDamege'],
    },
    {
      id: '4',
      image: live4,
      title: 'Alanzoka',
      subtitle: 'Gameplay Fortnite 20/03',
      game: 'Fortnite',
      tags: ['Games']
    },
    {
      id: '5',
      image: live5,
      title: 'NoobCBL',
      subtitle: 'Em busca do level 200!',
      game: 'CABAL Online',
      tags: ['Gameplays', 'Up']
    },
    {
      id: '6',
      image: live6,
      title: 'CabalZOR',
      subtitle: 'Farmando em TROPA',
      game: 'CABAL Online',
      tags: ['Farm', 'farmando', 'Cabal', 'COBR']
    },
  ];

  const renderItem = ({ item }) => (
<View style={styles.item}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.text}>
      <Text style={styles.title}>{item.title}</Text>
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
