import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

export const ContentActivityIndicator = (): JSX.Element => {
  return (
    <View style={styles.preloaderContainer}>
      <ActivityIndicator
        style={styles.indicator}
        animating={true}
        size="large"
        color={'#23B86E33'}
      />
    </View>
  );
};
