import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../assets/Shared/Colors";
import Carousel, { Pagination } from "react-native-snap-carousel"; // Import Carousel component
import SignInModal from "./SignInModal";
import RegisterModel from './RegisterModel';
import SocialModel from "./SocialModel";

const SplashScreen = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const opacity = new Animated.Value(0);
  const scale = new Animated.Value(0);
  const [isSignInModalVisible, setSignInModalVisible] = useState(false);
  const [isRegisterModelVisible, setRegisterModelVisible] = useState(false);
  const [isSocialModelVisible, setSocialModelVisible] = useState(false);
  
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.spring(scale, {
      toValue: 1,
      friction: 2,
      tension: 60,
      useNativeDriver: true,
    }).start();
  }, [navigation, opacity, scale]);

  const images = [
    {
      image: require("../../assets/images/splash.png"),
      heading: "Post, Profit, Prosper",
      text: "Where Every Post Pays!",
    },
    {
      image: require("../../assets/images/splash1.png"),
      heading: "Expand, Engage, Elevate",
      text: "Grow Your Brand With Every Post!",
    },
    {
      image: require("../../assets/images/splash2.png"),
      heading: "Post, Profit, Prosper",
      text: "Where Every Post Pays!",
    },
    {
        image: require("../../assets/images/splash4.png"),
        heading: "Expand, Engage, Elevate",
        text: "Grow Your Brand With Every Post!",
      },
      {
        image: require("../../assets/images/splash5.png"),
        heading: "Blitz, Boost, Buzz",
        text: "Viral Blitz Unleashes Success!",
      },
  ];

  const renderSlide = ({ item }) => (
    <View style={styles.slideContainer}>
          <View style={styles.textContainer}>
      <Text style={styles.slideheading}>{item.heading}</Text>
      <Text style={styles.slideText}>{item.text}</Text>
      </View>

      <Image source={item.image} style={styles.slideImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderSlide}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width * 0.9}
        onSnapToItem={(index) => setCurrentIndex(index)}
        autoplay={true} // Enable autoplay
        autoplayInterval={3000} // Adjust autoplay interval (milliseconds)
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={currentIndex}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.9}
      />
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setRegisterModelVisible(true)}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMain} onPress={() => setSignInModalVisible(true)}>
          <Text style={styles.buttonTextMain}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSocialModelVisible(true)}>
          <Text style={styles.notADoctorText}>Social Sign in</Text>
        </TouchableOpacity>
      </View>
      <SignInModal
        visible={isSignInModalVisible}
        onClose={() => setSignInModalVisible(false)}
      />
      <RegisterModel
        visible={isRegisterModelVisible}
        onClose={() => setRegisterModelVisible(false)}
      />
      <SocialModel visible={isSocialModelVisible} onClose={()=> setSocialModelVisible(false)} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  textContainer: {
    maxWidth: Dimensions.get("window").width * 0.8, // Adjust maximum width as needed
  },
  slideContainer: {
    width: Dimensions.get("window"),
    justifyContent: "center",
    alignItems: "center",
  },
  slideImage: {
    width: "100%",
    height: "80%", // Adjust height as needed
    resizeMode: "contain",
  },
  slideheading: {
    color: Colors.black,
    textAlign: "center",
    marginBottom: 10,
    fontSize: 25,
    fontFamily: "appfont-bold",
    color: Colors.Splash,
  },
  slideText: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.SplashButton, // Active dot color
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCCCCC', // Inactive dot color
    marginHorizontal: 4,
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  notADoctorText: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "appfont-medium",
    textDecorationLine: "underline",
  },
  mainText: {
    fontSize: 24,
    marginBottom: 20,
    color: Colors.white,
    fontFamily: "appfont-bold",
  },
  button: {
    width: "100%",
    backgroundColor: Colors.SplashButton,
    borderColor: Colors.SplashButton,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonMain: {
    width: "100%",
    backgroundColor: "transparent",
    borderColor: Colors.SplashButton,
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 98,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
  buttonTextMain: {
    color: Colors.SplashButton,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
});
