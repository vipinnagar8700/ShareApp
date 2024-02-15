import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { useNavigation } from "@react-navigation/native";

const Features = () => {
  return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: 20, fontFamily: "appfont-bold", fontWeight: 300 }}
        >
          Campaign Ready to Blitz
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: "#A99BFD", borderRadius: 5 }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "appfont-medium",
              color: Colors.white,
              padding: 10,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Features;

const styles = StyleSheet.create({});
