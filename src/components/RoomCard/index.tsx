import React from 'react';

import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors, Common, Fonts } from 'styles';

interface Props {
  item: Room;
}

const RoomCard: React.FC<Props> = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.imageContentContainer}>
        <View style={styles.imageTextsContainer}>
          <Text style={Fonts.imageTitle}>{item.title}</Text>
          <Text style={Fonts.imageDescription}>{item.description}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.applyButton}>
            <Text style={Fonts.buttonText}>Apply to my room</Text>
          </Pressable>
          <Pressable style={styles.detailButton}>
            <Text style={[Fonts.buttonText, { color: Colors.white }]}>
              Details
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Common.screenWidth,
    height: Common.screenHeight * 0.72,
  },
  imageContentContainer: {
    position: 'absolute',
    bottom: 32,
    left: 32,
    zIndex: 10,
    gap: 22,
  },
  imageTextsContainer: {
    gap: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  applyButton: {
    backgroundColor: Colors.white,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailButton: {
    borderWidth: 1,
    borderColor: Colors.whiteOpacity,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 40,
  },
});

export default RoomCard;
