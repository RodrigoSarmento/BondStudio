import React from 'react';

import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import IconButton from 'components/IconButton';
import RoomCard from 'components/RoomCard';
import { Colors, CommonStyles, Fonts } from 'styles';

const App = () => {
  const data: Room[] = [
    {
      title: 'Harvest',
      description: 'Bold design meets timeless beauty',
      image: require('assets/images/image1.png'),
    },
    {
      title: 'Stoneworks',
      description: 'Bold design meets timeless beauty',
      image: require('assets/images/image2.png'),
    },
    {
      title: 'Alabaster',
      description: 'Bold design meets timeless beauty',
      image: require('assets/images/image3.png'),
    },
  ];

  const renderHeader = () => {
    return (
      <View style={styles.gap36}>
        <IconButton
          customStyle={styles.iconContainer}
          customIconStyle={styles.iconStyle}
          source={require('assets/icons/menu.png')}
        />
        <View style={styles.profileContainer}>
          <Image
            source={require('assets/images/avatar.png')}
            style={styles.avatarStyle}
          />
          <View>
            <Text style={[Fonts.headerTitle, { color: Colors.gray1 }]}>
              Georgia
            </Text>
            <Text style={Fonts.headerTitle}>Let's start designing</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={CommonStyles.safeAreaContainer}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <ScrollView style={CommonStyles.flex1}>
        <View style={CommonStyles.screenContainer}>
          {renderHeader()}
          <FlatList
            keyExtractor={(item) => item.title}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            renderItem={({ item }) => <RoomCard item={item} />}
          />
          <View style={styles.navContainer}>
            <IconButton
              customStyle={styles.navButtonSelected}
              source={require('assets/icons/home.png')}
            />
            <IconButton
              customStyle={styles.navButton}
              source={require('assets/icons/star.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignSelf: 'flex-end',
    marginRight: 24,
    marginTop: 24,
  },
  gap36: {
    gap: 36,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    marginLeft: 16,
  },
  iconStyle: { width: 18, height: 18, resizeMode: 'contain' },
  avatarStyle: {
    height: 64,
    width: 64,
    resizeMode: 'contain',
    marginTop: 10,
  },
  navButtonSelected: {
    width: 60,
    height: 40,
    backgroundColor: Colors.black01,
    borderRadius: 38,
  },
  navButton: {
    width: 60,
    height: 40,
  },
  navContainer: {
    alignSelf: 'center',
    backgroundColor: Colors.black02,
    justifyContent: 'space-between',
    padding: 8,
    height: 56,
    width: 132,
    flexDirection: 'row',
    borderRadius: 60,
    marginTop: 14, //Sum gap36 from screen container to be 50 total, not a good spacing setup in my opinion...
  },
});

export default App;
