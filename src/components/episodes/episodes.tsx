import {useQuery} from '@apollo/client';
import React, {FC} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {ContentActivityIndicator} from '../content-activity-indicator';
import {query} from './get-episodes';
import {styles} from './styles';

interface IEpisode {
  item: {id: string; name: string; air_date: string};
}

export const Episodes: FC = (): JSX.Element => {
  const {data, loading} = useQuery(query);

  const renderItem = ({item}: IEpisode) => (
    <TouchableOpacity style={styles.item}>
      <Text numberOfLines={1} style={styles.text}>
        {item.name}
      </Text>
      <Text numberOfLines={1} style={styles.text}>
        {item.air_date}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      {loading ? (
        <ContentActivityIndicator />
      ) : (
        <FlatList
          data={data?.episodes?.results}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString() as string}
        />
      )}
    </View>
  );
};
