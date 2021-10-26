import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {interpolateColors} from 'react-native-reanimated';
import {onScrollEvent, useValue} from 'react-native-redash/lib/module/v1';
import Slide, {SLIDE_HEIGHT} from './Slide';
import SubSlide from './SubSlide';

const {width} = Dimensions.get('window');
const BORDER_BOTTOM_RADIUS = 75;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_BOTTOM_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    borderTopLeftRadius: BORDER_BOTTOM_RADIUS,
  },
});

const Onboarding = () => {
  const slides = [
    {
      title: 'Relaxed',
      subTitle: 'Find Your Outfits',
      description:
        'Confused about your outfit? Don"t" worry! Find the best outfit here!',
      color: '#BFEAF5',
    },
    {
      title: 'Playful',
      subTitle: 'Hear it First, Wear it First',
      description:
        'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
      color: '#BEECC4',
    },
    {
      title: 'Excentric',
      subTitle: 'Your Style, Your Way',
      description:
        'Create your individual and unique style and look amazing everyday',
      color: '#FFE4D9',
    },
    {
      title: 'Funky',
      subTitle: 'Look Good, Feel Good',
      description:
        'Discover the latest trends in fashion and explore your personality',
      color: '#FFDDDD',
    },
  ];

  const x = useValue(0);

  const onScroll = onScrollEvent({x});

  const backgroundColor = interpolateColors(x, {
    inputRange: slides.map((_, index) => index * width),
    outputColorRange: slides.map(slide => slide.color),
  });

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.slider, {backgroundColor}]}>
          <Animated.ScrollView
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            // scrollEventThrottle={1}
            onScroll={onScroll}
            bounces={false}>
            {slides.map((slide, index) => (
              <Slide title={slide.title} key={index} right={index % 2 !== 0} />
            ))}
          </Animated.ScrollView>
        </Animated.View>
        <View style={styles.footer}>
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor,
              // backgroundColor: 'cyan',
            }}
          />
          <View
            style={[styles.footerContent, {width: width * slides.length - 1}]}>
            {slides.map((slide, index) => (
              <SubSlide
                subTitle={slide.subTitle}
                description={slide.description}
                x={x}
                key={index}
                last={index === slides.length - 1}
              />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default Onboarding;
