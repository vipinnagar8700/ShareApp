import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import HospitalDoctor from '../../App/Components/HospitalScreen/HospitalDoctor';
const PageHeader = ({ title }) => {

    const navigation = useNavigation()

    return (
        <>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    <Ionicons name="arrow-back-circle-outline" size={37} color="black" />
                </TouchableOpacity>

                <Text style={{ fontSize: 20 }}>{title}</Text>
            </View>
            <HospitalDoctor />
        </>


    )
}

export default PageHeader

const styles = StyleSheet.create({})