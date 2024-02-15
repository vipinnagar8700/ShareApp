import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomDrawer from '../../Navigations/CustomDrawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
    const navigation = useNavigation();
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const openSidebar = () => {
        setDrawerOpen(true);
    };

    const closeSidebar = () => {
        setDrawerOpen(false);
    };
    return (
        <View style={{ padding: 20, marginTop: 5,backgroundColor:'#fff' }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 7, alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={openSidebar}>
                    <Image source={{uri:"https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1707974115~exp=1707977715~hmac=87a89bfeedd2f2e9035305d1c9701631e873d6f379938309b91013c400a26c20&w=740"}} style={{ width: 50, height: 50, borderRadius: 99 }} />
                    
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: 'bold',  fontFamily: "appfont-medium"}}>Vipin Nagar</Text>
                <TouchableOpacity  style={{ display: 'flex', flexDirection: 'row', gap: 7, alignItems: 'center', justifyContent: 'space-between' }} onPress={openSidebar}>
                <FontAwesome name="bell-o" size={24}color="#fff"  style={{backgroundColor:'#A99BFD',padding:8,borderRadius:50}}   />
                <AntDesign name="question" size={32} color="#fff" style={{backgroundColor:'#A99BFD',padding:3,borderRadius:50}}/>
                </TouchableOpacity>
            </View>
            {isDrawerOpen && <CustomDrawer onClose={closeSidebar} />}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({});
