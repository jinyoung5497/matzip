import {mapNavigations} from '@/constants';
import {MapStackParamList} from '@/navigations/stack/MapStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

type AddPostScreenProps = StackScreenProps<
  MapStackParamList,
  typeof mapNavigations.ADD_POST
>;

export default function AddPostScreen({route}: AddPostScreenProps) {
  const {location} = route.params;

  return (
    <View>
      <Text>{location.latitude}</Text>
    </View>
  );
}
