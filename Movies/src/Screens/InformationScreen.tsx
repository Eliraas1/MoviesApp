import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  ScrollView,
} from 'react-native';
import {API_IMG} from '../helpers/constant';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {setHeight, setWidth} from '../helpers/screenSize';
import Background from '../components/Background';
import {useSelector} from 'react-redux';
import {YOUTUBE_BASE_URL} from '../helpers/constant';
import {RootState} from '../app/store';
import SimilarMovies from '../components/SimilarMovies';

const InformationScreen = () => {
  const movieItem = useSelector((state: RootState) => state.movieDetail);
  const {
    title,
    id,
    overview,
    backdrop_path,
    vote_average,
    release_date,
    runtime,
    genres,
  } = movieItem.item;
  const isMovieLoading = movieItem.isLoading;
  const trailer = movieItem.video;
  const isMovieItemEmpty =
    movieItem && Object.keys(movieItem.item).length === 0;
  const [isLoading, setIsLoading] = React.useState(false);
  const movieGenresFormattedText = !genres
    ? ''
    : genres.map(genre => genre.name).join(', ');

  const onPlayIconTouch = async () => {
    setIsLoading(true);
    const BaseUrl = YOUTUBE_BASE_URL + trailer;
    await Linking.openURL(BaseUrl);
    setIsLoading(false);
  };

  return (
    <Background>
      {!isMovieItemEmpty && (
        <ScrollView style={{flex: 1}}>
          {isMovieLoading ? (
            <ActivityIndicator size={100} color="#ffff" />
          ) : (
            <View style={styles.container}>
              <View style={styles.posterContainer}>
                <Image
                  source={{uri: API_IMG + backdrop_path}}
                  resizeMode="cover"
                  style={styles.poster}
                />
              </View>
              <TouchableOpacity
                style={styles.playIcon}
                onPress={onPlayIconTouch}
                disabled={isLoading}>
                {isLoading ? (
                  <ActivityIndicator size="large" color="#ffff" />
                ) : (
                  <Icon size={50} name="play-circle" color="white" />
                )}
              </TouchableOpacity>
              <View style={styles.headerContainer}>
                <Text style={{...styles.titleText, alignSelf: 'center'}}>
                  {title}
                </Text>
                <Text style={styles.genreText}>
                  {movieGenresFormattedText} | {runtime} min
                </Text>
                <View style={styles.movieTitle}>
                  <View style={styles.rating}>
                    <Icon name="star" color="yellow" size={20} />
                    <Text style={styles.titleText}>
                      {vote_average.toFixed(1)}
                    </Text>
                  </View>
                  <View style={styles.rating}>
                    <Icon name="calendar" color="yellow" size={20} />
                    <Text style={styles.titleText}>{release_date}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.overviewContainer}>
                <Text style={styles.overviewTitle}>Synopsis</Text>
                <Text style={styles.overviewBody}>{overview}</Text>
              </View>
              <SimilarMovies />
            </View>
          )}
        </ScrollView>
      )}
    </Background>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    padding: 10,
    marginTop: 30,
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  posterContainer: {
    height: setHeight(30),
    width: setWidth(100),
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
    elevation: 100,
  },
  poster: {flex: 1, borderBottomLeftRadius: 500, borderBottomRightRadius: 500},
  playIcon: {
    position: 'absolute',
    top: '10%',
    alignSelf: 'center',
  },
  movieTitle: {
    padding: 10,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {color: 'white', fontWeight: 'bold', fontSize: 15},
  genreText: {color: 'lightgrey', alignSelf: 'center', marginTop: 3},
  rating: {fontWeight: 'bold', alignItems: 'center'},

  overviewContainer: {
    width: setWidth(100),
    marginTop: 50,
    padding: 10,
    // alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  overviewTitle: {
    marginBottom: 3,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  overviewBody: {
    color: '#434544',
    textAlign: 'justify',
  },
});
