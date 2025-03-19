import { Image, StyleSheet, Platform, Text,View, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Link} from "expo-router";
import {images } from "@/constants/images";
import {icons } from "@/constants/icons";
import { useRouter } from 'expo-router';
import  SearchBar  from '@/components/SearchBar';





export default function HomeScreen() {
  const router = useRouter();


  return (
    <View className="flex-1 bg-slate-700">
      <Image source={images.bg} className="absolute w-full
        z-0"/>

        <ScrollView className="flex-1 px-5"
          showsVerticalScrollIndicator={false} contentContainerStyle={{
            minHeight: "100%", paddingBottom: 10 }}>
          <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>

          <View className="flex-1 mt-5">
            <SearchBar
                onPress={() => router.push("/search")}
                placeholder="Search"
                />
          </View>
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
