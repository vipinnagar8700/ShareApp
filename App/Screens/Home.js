import { Button, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header';
import Search from '../Components/Home/Search';
import Slider from '../Components/Home/Slider';
import Categories from '../Components/Home/Categories';
import SubHeading from '../Components/Home/SubHeading';
import Features from '../Components/Home/features';
import Facilities from '../Components/Home/Facilities';
import DoctorList from '../Components/Home/DoctorList';
import NotFeel from '../Components/Home/NotFeel';
import Labtests from '../Components/Home/Labtests';
import OffersBanner from '../Components/Home/OffersBanner';
import Proucts from '../Components/Home/Proucts';
import Review from '../Components/Home/Review';
import Footer from '../Components/Home/Footer';
import Community from '../Components/Home/Community';
import SingleDoctor from './SingleDoctor';



const Home = () => {
  return (
    <View >
      <Header />
      <ScrollView style={{ marginBottom: "30%" }} horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <SubHeading />
        <Slider />
        <Features />
        <SingleDoctor/>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})