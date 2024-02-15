import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

const Footer = () => {
    return (
        <View style={{ backgroundColor: Colors.PRIMARY, marginBottom: 10, padding: 10, paddingVertical: 20 }}>
            <View >
                <Text style={{ color: "white", fontFamily: "appfont-medium", fontSize: 18 }}>Life Care Solution</Text>
                <Text style={{ color: "white", fontFamily: "appfont-medium", fontSize: 15 }}>Our vision is to help mankind live healtheier , longer lives by making quality healthcare accessible affordable and convenient.</Text>
                <Text style={{ color: "white", fontFamily: "appfont-light", fontSize: 13 }}>Made by Vipin Nagar @ noida</Text>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({})