import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import MovieCard from '../components/MovieCard';
import {useSelector} from 'react-redux';
import {RootState} from '../app/store';

const SimilarMovies = () => {
  const keyExtractor = React.useCallback(item => item.id, []);
  const similarMovie = useSelector(
    (state: RootState) => state.movieDetail.similarItems,
  );
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Similar Movie</Text>
      <FlatList
        data={similarMovie}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={({item}) => (
          <MovieCard item={item} height={40} width={45} />
        )}
        style={{flex: 1}}
      />
    </View>
  );
};

export default SimilarMovies;

const styles = StyleSheet.create({
  container: {flex: 1, margin: 10},
  textStyle: {color: 'lightgrey', fontWeight: 'bold', fontSize: 25},
});
