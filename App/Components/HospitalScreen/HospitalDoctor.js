import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../../assets/Shared/Colors';

const HospitalDoctor = ({ onTabChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
      <TouchableOpacity onPress={() => setActiveIndex(0)}>
        <Text style={activeIndex === 0 ? styles.activeText : styles.inActiveText}>Hospital</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveIndex(1)}>
        <Text style={activeIndex === 1 ? styles.activeText : styles.inActiveText}>Doctors</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HospitalDoctor;

const styles = StyleSheet.create({
  activeText: {
    textAlign: 'center',
    fontFamily: 'appfont',
    fontSize: 18,
    color: Colors.PRIMARY,
    borderBottomWidth: 4,
    borderBottomColor: Colors.MAIN,
    padding: 3,
    width: '100%',
  },
  inActiveText: {
    textAlign: 'center',
    fontFamily: 'appfont',
    fontSize: 18,
    color: Colors.PRIMARY,
    padding: 3,
    width: '100%',
  },
});
