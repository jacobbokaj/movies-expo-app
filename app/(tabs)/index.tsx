import { FlatList, Image, StyleSheet, Platform, Text,View, ScrollView, ActivityIndicator } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Link} from "expo-router";
import {images } from "@/constants/images";
import {icons } from "@/constants/icons";
import { useRouter } from 'expo-router';
import  SearchBar  from '@/components/SearchBar';
import { fetchMovies } from '@/services/api';
import  useFetch from '@/services/useFetch'
import MovieCard from '@/components/MovieCard';




export default function HomeScreen() {
  const router = useRouter();

  const {data: movies,
     loading: moviesLoading,
      error: moviesError
    } = useFetch(() => fetchMovies({
    query: ''
  }))

  return (
    <View className="flex-1 bg-slate-700">
      <Image source={images.bg} className="absolute w-full
        z-0"/>

        <ScrollView className="flex-1 px-5"
          showsVerticalScrollIndicator={false} contentContainerStyle={{
            minHeight: "100%", paddingBottom: 10 }}>
          <Image source={icons.logo} className="w-12 h-10 
            mt-20 mb-5 mx-auto"/>

            {moviesLoading ? (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="mt-10 self-center"
                />
            ): moviesError ? (
              <Text>Error: {moviesError?.message}</Text>
            ): (
                <View className="flex-1 mt-5">
                  <SearchBar
                    onPress={() => router.push("/search")}
                    placeholder="Search for a movie"
                    />

                    <>
                      <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>

                      <FlatList
                          data={movies} 
                          renderItem={({item}) => (
                            <MovieCard
                              {...item}/>
                          )}

                          keyExtractor={(item) => item.id.toString()}
                          numColumns={2}
                          columnWrapperStyle={{
                            justifyContent: 'flex-start',
                            gap: 10,
                            padding: 5,
                            marginBottom: 5,
                            width: '50%',
                          }}
                          className="mt-1 pb-32"
                          scrollEnabled={false}
                        />
                    </>

                </View>

            )}
        </ScrollView>
    </View>
  );
}












const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
