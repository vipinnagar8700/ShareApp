import React from "react";
import { View, Modal, StyleSheet, Text, TouchableOpacity,TextInput } from "react-native";
import Colors from "../../assets/Shared/Colors";

const SignInModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <View style={{  flexDirection: 'row',alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,}}>
          <Text style={styles.modalHeading}>Enter credentials</Text> 
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.inputBox}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            keyboardType="password"
          />
        </View>
        <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
       
        <TouchableOpacity>
          <Text style={styles.notADoctorText}>Trouble Signing in</Text>
        </TouchableOpacity>
      </View>
         
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "appfont-medium",
  },
  modalContent: {
    backgroundColor: Colors.white,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeading: {
    fontSize: 24,
    marginBottom: 10,
    color: Colors.black,
    fontFamily: "appfont-medium",
  },
  closeButton: {
    fontSize: 18,
    color: Colors.SplashButton,
    textAlign: "center",
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
    borderRadius: 10,
    color: Colors.MAIN,
    backgroundColor: Colors.white
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

export default SignInModal;
