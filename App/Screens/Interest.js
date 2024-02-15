import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../assets/Shared/Colors";

const Interest = () => {
  // Assuming you have an array of social media or any other data
  const socialMedia = [
    "Facebook",
    "Twitter",
    "Instagram",
    "LinkedIn",
    "Pinterest",
    "Snapchat",
  ];

  // Get the screen width
  const screenWidth = Dimensions.get("window").width;

  // Calculate the number of circles to display per row based on screen width
  const circlesPerRow = Math.floor(screenWidth / 100); // Assuming each circle has a width of 80 and margin of 10

  // Function to render circles based on the data
  const renderCircles = () => {
    const circles = socialMedia.map((media, index) => (
      <View style={styles.circle} key={index}></View>
    ));

    // If more than circlesPerRow circles, create a new row
    if (socialMedia.length > circlesPerRow) {
      const rows = [];
      while (circles.length > 0) {
        rows.push(
          <View style={styles.containera} key={rows.length}>
            {circles.splice(0, circlesPerRow)}
          </View>
        );
      }
      return rows;
    }

    return <View style={styles.containera}>{circles}</View>;
  };

  const socialMediaa = [
    {
      id: 1,
      name: "Health & Wellness",
      image: "",
    },
    {
      id: 2,
      name: "Business",
      image: "",
    },
    {
      id: 3,
      name: "Finance",
      image: "",
    },
    {
      id: 4,
      name: "Tech",
      image: "",
    },
    {
      id: 5,
      name: "Arts",
      image: "",
    },
    {
      id: 6,
      name: "Sports",
      image: "",
    },
    {
      id: 7,
      name: "Travel",
      image: "",
    },
    {
      id: 8,
      name: "Music",
      image: "",
    },
    {
      id: 9,
      name: "Food",
      image: "",
    },
    {
      id: 10,
      name: "Entertainment",
      image: "",
    },
    {
      id: 11,
      name: "Fashion",
      image: "",
    },
    {
      id: 12,
      name: "Hobbies",
      image: "",
    },
    {
      id: 13,
      name: "Lifestyle",
      image: "",
    },
    {
      id: 14,
      name: "Pets",
      image: "",
    },
    {
      id: 15,
      name: "Gaming",
      image: "",
    },
  ];

  // Get the screen width
  const screenWidtha = Dimensions.get("window").width / '0.1';

  // Calculate the number of circles to display per row based on screen width
  const circlesPerRowa = Math.floor(screenWidtha / 100); // Assuming each circle has a width of 80 and margin of 10

  // Function to render circles based on the data
  const renderCirclesa = () => {
    const circlesa = socialMediaa.map((media, index) => (
      <View>
        <View style={styles.circlea} key={index}></View>
        <Text style={styles.circleText}>{media.name} </Text>
      </View>
    ));

    // If more than circlesPerRow circles, create a new row
    if (socialMediaa.length > circlesPerRowa) {
      const rows = [];
      while (circlesa.length > 0) {
        rows.push(
          <View style={styles.containeraa} key={rows.length}>
            {circlesa.splice(0, circlesPerRow)}
          </View>
        );
      }
      return rows;
    }
    return <View style={styles.containeraa}>{circlesa}</View>;
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Almost done!</Text>

        <Text style={styles.subtitle}>Let’s connect your social media</Text>

        {/* Render circles */}
        {renderCircles()}
        <Text style={styles.subtitle}>Let’s find your interests</Text>
        {renderCirclesa()}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Interest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontFamily: "appfont-medium",
    fontSize: 25,
  },
  button: {
    width: "100%",
    backgroundColor: "#9399AA",
    borderColor: "#9399AA",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    marginTop:20
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
  subtitle: {
    textAlign: "start",
    fontFamily: "appfont-medium",
    fontSize: 20,
    marginTop: 20,
  },
  circleText: {
    marginTop: 3,
    textAlign: "center",
    fontFamily: "appfont-medium",
    fontSize: 12,
  },
  containera: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10, // Adjust as needed
    flexWrap: "wrap",
    gap: 10,
  },
  containeraa: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20, // Adjust as needed
    flexWrap: "wrap",
    gap: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.MAIN,
    marginVertical: 10,
  },
  circlea: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.MAIN,
    marginVertical: 10,
  },
});
