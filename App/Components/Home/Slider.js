import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

const Slider = () => {

    return (
        <View style={{ padding: 20 ,backgroundColor:'#fff'}}>
            <View style={{ width: Dimensions.get('screen').width * 0.88, height: 170, borderRadius: 10, margin: 2,backgroundColor:'#D4D2E2'}}>
                <View style={{padding:20}}>
                    <Text style={{fontFamily:"appfont-medium",fontSize:16}}>
                    No. of Campaigns ready to blitz
                    </Text>
                    <Text style={{fontFamily:"appfont-bold",fontSize:40,color:"#F59A93"}}>
                    154,252
                    </Text>
                    <Text style={{fontFamily:"appfont-medium",fontSize:16}}>
                    You’ve got it 👋
                    </Text>
                </View>
            </View>
         </View>
    )
}

export default Slider

const styles = StyleSheet.create({})