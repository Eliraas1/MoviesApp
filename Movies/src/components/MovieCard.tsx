import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../redux/features/favoriteSlice';
import {RootState} from '../redux/app/store';
import {API_IMG} from '../helpers/constant';
import {ADULT_ICON} from '../helpers/constant';
import {setHeight, setWidth} from '../helpers/screenSize';
import {getMovieDetailFetch} from '../redux/features/movieDetailsSlice';

const MovieCard = ({item, height, width}: any) => {
  const {
    title,
    release_date = '2022-07-06',
    poster_path,
    original_language,
    adult,
    vote_average,
    id,
    backdrop_path,
  } = item;
  const favoritesMovie = useSelector(
    (state: RootState) => state.favorite.idList,
  );
  let isInFavorite = favoritesMovie[`${id}`] ? true : false;
  const [isLoved, setIsLoved] = React.useState(isInFavorite);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const year = release_date ? release_date.split('-')[0] : '';

  const addMovieToFavorite = () => {
    setIsLoved(!isLoved);
    !isInFavorite
      ? dispatch(addFavorite(item))
      : dispatch(removeFavorite(item));
  };

  const handleMovieClick = () => {
    dispatch(getMovieDetailFetch(id));
    navigation.navigate('information');
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        width: width ? setWidth(width) : setWidth(80),
      }}
      onPress={handleMovieClick}
      key={id}>
      <Image
        style={{
          ...styles.poster,
          height: height ? setHeight(height) : setHeight(60),
        }}
        source={{
          uri: API_IMG + poster_path,
        }}
      />
      {adult && (
        <Image
          style={styles.adultOnly}
          source={{
            uri: ADULT_ICON,
          }}
        />
      )}
      <View style={styles.icon}>
        <Icon
          name={!isInFavorite ? 'heart-plus-outline' : 'heart-minus'}
          size={20}
          color="white"
          onPress={addMovieToFavorite}
        />
      </View>
      <View style={styles.rating}>
        <Text>{vote_average.toFixed(1)}</Text>
        <Icon name="star" size={18} color="white" />
      </View>
      <View style={styles.details}>
        <Text style={styles.titles}>{title}</Text>
        <View style={styles.subTitle}>
          <Text style={styles.titles}>{original_language}</Text>
          <Text style={styles.titles}>{year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    borderRadius: 12,
    marginVertical: 15,
  },
  details: {
    backgroundColor: 'rgba(94, 94, 91,1)',
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  poster: {
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 10,
  },
  titles: {color: 'white', textAlign: 'center'},
  icon: {
    position: 'absolute',
    right: '1%',
    top: '0%',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  rating: {
    position: 'absolute',
    flexDirection: 'row',
    left: '1%',
    top: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(245, 179, 0,0.75)',
    justifyContent: 'center',
  },
  adultOnly: {
    position: 'absolute',
    left: 0,
    top: '5%',
    resizeMode: 'contain',
    height: 30,
    width: 30,
    borderRadius: 5,
  },
});
export default MovieCard;
