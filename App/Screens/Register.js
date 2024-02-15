import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Colors from "../../assets/Shared/Colors";
import * as ImagePicker from "expo-image-picker"; // Import ImagePicker
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [image, setImage] = useState("https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1707974115~exp=1707977715~hmac=87a89bfeedd2f2e9035305d1c9701631e873d6f379938309b91013c400a26c20&w=740");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  const handleRegisterPress = () => {
    // Add your registration logic here
    navigation.navigate("Login");
  };
  const handleImagePicker = async () => {
    if (Constants.platform.ios || Constants.platform.android) {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <AntDesign name="left" size={25} color={Colors.SplashButton} />
          </TouchableOpacity>
          <Text style={styles.headerText}> Finshed signing up</Text>
          <Text></Text>
        </View>
        <View></View>
        {/* Display selected image */}
        
        {/* Button to pick image */}
        <TouchableOpacity style={styles.buttona} onPress={handleImagePicker}>
        {image && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        )}
          <Text style={styles.buttonTexta}><AntDesign name="pluscircleo" size={24} color={Colors.SplashButton} /></Text>
        </TouchableOpacity>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            onChangeText={setFirstName}
            value={firstName}
          />
          <Text style={styles.label}>Phone number (optional)</Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 27 }}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="+91"
                keyboardType="numeric"
              />
            </View>
            <View>
              <TextInput
                style={[styles.input, { width: "100%" }]}
                placeholder="Enter phone number                       "
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                keyboardType="numeric"
              />
            </View>
          </View>
          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType="numeric"
          />
          <View style={{ display: "flex", flexDirection: "row", gap: 27 }}>
            <View>
              <Text style={styles.label}>Date of Birth</Text>
              <TextInput
                style={styles.input}
                placeholder="MM/DD/YYYY"
                keyboardType="numeric"
              />
            </View>

            <View>
              <Text style={styles.label}>Gender</Text>
              <TextInput
                style={[styles.input, { width: "100%" }]}
                placeholder="Select Gender             v"
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                keyboardType="numeric"
              />
            </View>
          </View>

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full address"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType="numeric"
          /><MaterialIcons style={{position:'absolute',top:370,left:280}} name="my-location" size={24} color={Colors.SplashButton}/>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType="numeric"
          />
          <Ionicons name="eye-outline" style={{position:'absolute',top:450,left:280}}  size={24} color={Colors.SplashButton} />
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType="numeric"
          /><Ionicons name="eye-off-outline" style={{position:'absolute',top:530,left:280}}  size={24} color={Colors.SplashButton} />
          <Text style={styles.label}>Referral code</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter  referral from connections to earn points"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
  },

  headerText: {
    fontSize: 25,
    fontFamily: "appfont-medium",
    textAlign: "center", // Center the text
    flex: 1, // Allow text to take remaining space
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.MAIN,
  },
  buttona: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.MAIN,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.MAIN,
  },
  header: {
    marginVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center content horizontally
  },
  inputBox: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginTop: 3,
    marginBottom: 4,
    fontFamily: "appfont-medium",
  },
  input: {
    height: 50,
    marginVertical: 1,
    borderWidth: 1,
    padding: 15,
    borderColor: Colors.MAIN,
    borderRadius: 8,
    color: Colors.MAIN,
    backgroundColor: Colors.white,
  },
  button: {
    width: "100%",
    backgroundColor: "#9399AA",
    borderColor: "#9399AA",
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
  buttonTexta: {
    backgroundColor:Colors.white,
    borderRadius:50,
    position:'absolute',
    fontSize: 16,
  fontFamily: "appfont-medium",
 left:63,
 top:80,
  color: Colors.white,
  fontSize: 16,
  fontFamily: "appfont-medium",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 10,
  },
  footerText: {
    fontSize: 16,
    fontFamily: "appfont-medium",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 20,
  },
  socialButton: {
    backgroundColor: Colors.PRIMARY,
    color: Colors.white,
    fontFamily: "appfont-medium",
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  socialButtona: {
    backgroundColor: "#DD4B39",
    color: Colors.white,
    fontFamily: "appfont-medium",
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
});

export default Register;
