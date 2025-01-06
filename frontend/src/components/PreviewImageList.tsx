import {ImageUri} from '@/types/domain';
import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Platform,
  StyleSheet,
  Pressable,
} from 'react-native';

interface PreviewImageListProps {
  imageUris: ImageUri[];
}

export default function PreviewImageList({imageUris}: PreviewImageListProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {imageUris.map(({uri}, index) => {
          return (
            <Pressable key={index} style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                source={{
                  uri: `${
                    Platform.OS === 'ios'
                      ? 'http://localhost:3030/'
                      : 'http://10.0.2.2:3030/'
                  }${uri}`,
                }}
                style={styles.image}
              />
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    gap: 15,
  },
  imageContainer: {
    width: 70,
    height: 70,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
