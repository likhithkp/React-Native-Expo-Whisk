import { Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

export default function SplashScreen() {

  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);

  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;
    setTimeout(() =>  ring1Padding.value = withSpring(ring1Padding.value+hp(7)), 100);
    setTimeout(() =>  ring2Padding.value = withSpring(ring2Padding.value+hp(7.5)), 400);
  },[])

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style='dark' />

      <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring1Padding }}>
        <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring2Padding }}>
          <Image source={require("../../assets/logo.png")}
            style={{ width: hp(20), height: hp(20) }}
          />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-2" >
        <Text style={{ fontSize: hp(7) }} className="font-bold text-white tracking-widest">Whisk</Text>
        <Text style={{ fontSize: hp(2) }} className="font-medium text-white tracking-widest ">Unleash Your Cravings</Text>
      </View>
    </View>
  )
}
