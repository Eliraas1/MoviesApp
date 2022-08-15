import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import MovieCard from '../components/MovieCard';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/app/store';
import {getMovieFetch} from '../redux/features/movieSlice';
import {setHeight, setWidth} from '../helpers/screenSize';
import Background from '../components/Background';
const MovieScreen = () => {
  const Movie = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();
  const keyExtractor = item => item.id.toString();

  const getMovies = () => {
    dispatch(getMovieFetch());
  };

  const renderCard = ({item}) => {
    return <MovieCard item={item} />;
  };
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.flatListView}>
          <FlatList
            data={Movie.results}
            keyExtractor={keyExtractor}
            renderItem={renderCard}
            maxToRenderPerBatch={5}
          />
        </View>
        <TouchableOpacity onPress={getMovies} style={styles.moviesBtn}>
          {Movie.isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Text style={styles.text}>
              {Movie.page <= 1 ? 'Show' : 'More'} movies
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center'},
  flatListView: {
    height: setHeight(70),
    width: setWidth(100),
    alignItems: 'center',
  },
  moviesBtn: {
    width: setWidth(30),
    height: setHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 25,
    marginTop: 5,
  },
});

export default MovieScreen;
