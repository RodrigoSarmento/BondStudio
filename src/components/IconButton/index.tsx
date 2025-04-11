import React, { useMemo } from 'react';

import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { CommonStyles } from 'styles';

const IconButton: React.FC<IIconButton> = ({
  customStyle,
  source,
  customIconStyle,
}) => {
  const containerStyle = useMemo(() => {
    const { baseContainerStyle } = styles;

    return { ...baseContainerStyle, ...customStyle };
  }, [customStyle]);

  const iconStyle = useMemo(() => {
    const { baseIconStyle } = styles;

    return { ...baseIconStyle, ...customIconStyle };
  }, [customIconStyle]);

  return (
    <View style={CommonStyles.columnCenter}>
      <TouchableOpacity onPress={() => {}} style={containerStyle}>
        <Image style={iconStyle} source={source} resizeMode={'contain'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  baseContainerStyle: {
    height: 24,
    width: 24,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseIconStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default IconButton;
