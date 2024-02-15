import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import Colors from '../../assets/Shared/Colors';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();
  const handleRegisterPress = () => {
    // Add your registration logic here
    navigation.navigate('Home'); // R
  };

  const handleSignupNowPress = () => {
    // Navigate to the register page
    navigation.navigate('Register'); // Replace 'Register' with the actual name of your register screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Life Care Solution</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login </Text>
          <Text style={[styles.notADoctorText, { color: Colors.PRIMARY, marginLeft: 85 }]} >Are you a doctor?</Text>
        </View>

        <View style={styles.inputBox}>

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={setLastName}
            value={lastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.headera}>
          <Text style={[styles.notADoctorText, { color: Colors.PRIMARY, marginLeft: 185 }]} >Forgot Password?</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegisterPress}
        >
          <Text style={styles.buttonText}>LOGIN NOW</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an login?
          </Text>
          <TouchableOpacity onPress={handleSignupNowPress}>
            <Text
              style={[styles.notADoctorText, { color: Colors.PRIMARY, marginLeft: 45 }]}
            >
              Signup Now !
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.socialButtons}>
          <TouchableOpacity
            style={styles.socialButton}
          >
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButtona}
          >
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.MAIN,
    width: '100%',
    marginBottom: 5, // Adjust this value to control the distance between the divider and text
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  bottomContainer: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.white,
  },
  mainText: {
    fontSize: 34,
    marginBottom: 140,
    color: Colors.white,
    fontFamily: 'appfont-bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headera: {
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'end',
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'appfont-medium',
  },
  notADoctorText: {
    fontSize: 13,
    fontFamily: 'appfont-light',
    color: Colors.PRIMARY,
  },
  inputBox: {
    width: '100%',
  },
  input: {
    height: 50,
    marginVertical: 5,
    borderWidth: 1,
    padding: 15,
    borderColor: Colors.MAIN,
    borderRadius: 50,
    color: Colors.MAIN,
    backgroundColor: Colors.MAIN
  },
  button: {
    width: '100%',
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'appfont-medium',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: "center",
    marginTop: 10,
  },
  footerText: {
    fontSize: 16,
    fontFamily: 'appfont-medium',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 20,
  },
  socialButton: {
    backgroundColor: Colors.PRIMARY,
    color: Colors.white,
    fontFamily: 'appfont-medium',
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  socialButtona: {
    backgroundColor: "#DD4B39",
    color: Colors.white,
    fontFamily: 'appfont-medium',
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
});

export default Login;
