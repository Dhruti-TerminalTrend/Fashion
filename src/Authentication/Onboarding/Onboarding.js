import React, {useRef} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Animated, {
  divide,
  interpolate,
  multiply,
  Extrapolate,
} from 'react-native-reanimated';
import {
  interpolateColor,
  useScrollHandler,
} from 'react-native-redash/lib/module/v1';
import {Welcome} from '..';
import {Theme} from '../../Components';
import Dot from './Dot';
import Slide, {SLIDE_HEIGHT} from './Slide';
import SubSlide from './SubSlide';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: Theme.borderRadii.xl,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: Theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
    resizeMode: 'contain',
  },
});

const Onboarding = ({navigation}) => {
  console.log(navigation);
  const scroll = useRef(null);

  const {scrollHandler, x} = useScrollHandler();

  const slides = [
    {
      title: 'Relaxed',
      subTitle: 'Find Your Outfits',
      description: `Confused about your outfit? Don't worry! Find the best outfit here!`,
      color: '#BFEAF5',
      // picture: require('./assets/1.png'),
      picture: {
        src: require('./assets/1.png'),
        width: 2513,
        height: 3583,
      },
    },
    {
      title: 'Playful',
      subTitle: 'Hear it First, Wear it First',
      description:
        'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
      color: '#BEECC4',
      // picture: require('./assets/2.png'),
      picture: {
        src: require('./assets/2.png'),
        width: 2791,
        height: 3744,
      },
    },
    {
      title: 'Excentric',
      subTitle: 'Your Style, Your Way',
      description:
        'Create your individual and unique style and look amazing everyday',
      color: '#FFE4D9',
      // picture: require('./assets/3.png'),
      picture: {
        src: require('./assets/3.png'),
        width: 2738,
        height: 3244,
      },
    },
    {
      title: 'Funky',
      subTitle: 'Look Good, Feel Good',
      description:
        'Discover the latest trends in fashion and explore your personality',
      color: '#FFDDDD',
      // picture: require('./assets/4.png'),
      picture: {
        src: require('./assets/4.png'),
        width: 1757,
        height: 2551,
      },
    },
  ];

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map(slide => slide.color),
  });

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.slider, {backgroundColor}]}>
          {slides.map(({picture}, index) => {
            const opacity = interpolate(x, {
              inputRange: [
                (index - 0.5) * width,
                index * width,
                (index + 0.5) * width,
              ],
              outputRange: [0, 1, 0],
              extrapolate: Extrapolate.CLAMP,
            });
            return (
              <Animated.View style={[styles.underlay, {opacity}]}>
                <Image
                  source={picture.src}
                  style={styles.picture}
                  // style={{
                  //   width: width - Theme.borderRadii.xl,
                  //   height:
                  //     ((width - Theme.borderRadii.xl) * picture.height) / picture.width,
                  // }}
                />
              </Animated.View>
            );
          })}
          <Animated.ScrollView
            ref={scroll}
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            {...scrollHandler}
            bounces={false}>
            {slides.map((slide, index) => (
              <Slide
                title={slide.title}
                picture={slide.picture}
                key={index}
                right={index % 2 !== 0}
              />
            ))}
          </Animated.ScrollView>
        </Animated.View>
        <View style={[styles.footer]}>
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor,
            }}
          />
          <View style={styles.footerContent}>
            <View style={styles.pagination}>
              {slides.map((_, index) => (
                <Dot
                  key={index}
                  currentIndex={divide(x, width)}
                  index={index}
                />
              ))}
            </View>
            <Animated.View
              style={[
                {
                  width: width * slides.length,
                  flexDirection: 'row',
                  flex: 1,
                  transform: [
                    {
                      translateX: multiply(x, -1),
                    },
                  ],
                },
              ]}>
              {slides.map((slide, index) => {
                const last = index === slides.length - 1;
                return (
                  <SubSlide
                    subTitle={slide.subTitle}
                    description={slide.description}
                    key={index}
                    last={last}
                    onPress={() => {
                      if (last) {
                        navigation.navigate(Welcome);
                      } else {
                        scroll?.current?.getNode().scrollTo({
                          x: width * (index + 1),
                          animated: true,
                        });
                      }
                    }}
                  />
                );
              })}
            </Animated.View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Onboarding;
