import React, {useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {divide, multiply} from 'react-native-reanimated';
import {
  interpolateColor,
  useScrollHandler,
} from 'react-native-redash/lib/module/v1';
import Dot from './Dot';
import Slide, {SLIDE_HEIGHT} from './Slide';
import SubSlide from './SubSlide';

const {width} = Dimensions.get('window');
const BORDER_RADIUS = 75;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Onboarding = () => {
  const scroll = useRef(null);

  const {scrollHandler, x} = useScrollHandler();

  const slides = [
    {
      title: 'Relaxed',
      subTitle: 'Find Your Outfits',
      description:
        'Confused about your outfit? Don"t" worry! Find the best outfit here!',
      color: '#BFEAF5',
      picture: require('./assets/1.png'),
    },
    {
      title: 'Playful',
      subTitle: 'Hear it First, Wear it First',
      description:
        'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
      color: '#BEECC4',
      picture: require('./assets/2.png'),
    },
    {
      title: 'Excentric',
      subTitle: 'Your Style, Your Way',
      description:
        'Create your individual and unique style and look amazing everyday',
      color: '#FFE4D9',
      picture: require('./assets/3.png'),
    },
    {
      title: 'Funky',
      subTitle: 'Look Good, Feel Good',
      description:
        'Discover the latest trends in fashion and explore your personality',
      color: '#FFDDDD',
      picture: require('./assets/4.png'),
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
              {slides.map((slide, index) => (
                <SubSlide
                  subTitle={slide.subTitle}
                  description={slide.description}
                  key={index}
                  last={index === slides.length - 1}
                  onPress={() => {
                    if (scroll.current) {
                      scroll.current.getNode().scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      });
                    }
                  }}
                />
              ))}
            </Animated.View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Onboarding;
