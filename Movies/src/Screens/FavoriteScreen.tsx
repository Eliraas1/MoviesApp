import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import MovieCard from '../components/MovieCard';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/app/store';
import Background from '../components/Background';
const FavoriteScreen = () => {
  const keyExtractor = React.useCallback(item => item.id, []);
  const favoritesMovie = useSelector(
    (state: RootState) => state.favorite.value,
  );

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Favorites Movie</Text>
        <FlatList
          data={favoritesMovie}
          keyExtractor={keyExtractor}
          renderItem={({item}) => <MovieCard item={item} />}
          style={{flex: 1}}
        />
      </View>
    </Background>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  textStyle: {color: 'black', fontWeight: 'bold', fontSize: 40},
});
