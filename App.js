import React, {useState} from 'react'
import { 
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Animated 
} from 'react-native'

export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))

  return (
    <SafeAreaView>
      <Animated.View 
        style={[
          styles.header,
          {
            height: scrollY.interpolate({
              inputRange: [10, 160, 185],
              outputRange: [140, 20, 0],
              extrapolate: 'clamp'
            }),
            opacity: scrollY.interpolate({
              inputRange: [1, 75, 170],
              outputRange: [1, 1, 0],
              extrapolate: 'clamp'
            })
          }
        ]}
      >
        <Image
          source={require('./src/assets/cam.png')}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />

        <Animated.Image
          source={require('./src/assets/logo.png')}
          style={{
            width: scrollY.interpolate({
              inputRange: [0, 120],
              outputRange: [200, 120],
              extrapolate: 'clamp'
            }), 
            height: 90 
          }}
          resizeMode="contain"
        />

        <Image
          source={require('./src/assets/send.png')}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </Animated.View>

      <ScrollView
      scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY }
          },

        }],
        { useNativeDriver: false })}
      >
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3997f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#fff'
  },
  box: {
    height: 300,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    elevation: 5
  }
})
