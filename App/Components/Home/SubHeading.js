import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";
import { Ionicons } from '@expo/vector-icons';
const SubHeading = () => {
  return (
    <View style={{ marginTop: 5, padding: 20, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap:10
        }}
      >
        {/* First Column */}
        <View style={styles.column}>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="volume-high"
                size={24}
                color="#A99BFD"
              />
            </View>
            <AntDesign name="arrowup" size={22} color="#fff" />
            <Text style={styles.percentage}>33%</Text>
          </View>
          <View>
            <Text style={styles.number}>240</Text>
            <Text style={styles.text}>No. of Campaigns</Text>
          </View>
        </View>
        {/* Second Column */}
        <View style={styles.columna}>
          <View style={styles.row}>
            <View style={styles.iconContainera}>
            <Ionicons name="eye" size={24} color="#fff" />
            </View>
            <AntDesign name="arrowup" size={22} color="#000000" />
            <Text style={styles.percentagea}>33%</Text>
          </View>
          <View>
            <Text style={styles.numbera}>5,425</Text>
            <Text style={styles.texta}>Views</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    alignItems: "start",
    backgroundColor: "#A99BFD",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  columna: {
    flex: 1,
    alignItems: "start",
    backgroundColor: "#d9d9d9",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 50,
    marginRight: 5,
  },
  iconContainera: {
    backgroundColor: "#F59A93",
    padding: 10,
    borderRadius: 50,
    marginRight: 5,
  },
  percentage: {
    fontFamily: "appfont-medium",
    fontSize: 22,
    color: "#fff",
    marginLeft: 5,
  },
  number: {
    fontFamily: "appfont-bold",
    fontSize: 45,
    color: "#fff",
  },
  text: {
    fontFamily: "appfont-medium",
    color: "#fff",
    fontSize: 14,
  },
  percentagea: {
    fontFamily: "appfont-medium",
    fontSize: 22,
    color: "#000000",
    marginLeft: 5,
  },
  numbera: {
    fontFamily: "appfont-bold",
    fontSize: 45,
    color: "#000000",
  },
  texta: {
    fontFamily: "appfont-medium",
    color: "#000000",
    fontSize: 14,
  },
});

export default SubHeading;
