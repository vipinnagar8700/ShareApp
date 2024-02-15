import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const Search = ({ setSearchText }) => {
  const [searchInput, setSearchInput] = useState()
  return (
    <View style={{ marginVertical: 5  , padding: 10}}>
      <View style={{
        display: 'flex', flexDirection: 'row', gap: 5,
        alignItems: 'center', borderWidth: 0.6, borderColor: '#E9ECED', padding: 7, borderRadius: 22, backgroundColor: "#E9ECED"
      }}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder='Search' style={{ width: '100%', fontFamily: "appfont" }} onChangeText={(value) => setSearchInput(value)} onSubmitEditing={() => setSearchText(searchInput)} />
      </View>

    </View>
  )
}

export default Search

const styles = StyleSheet.create({})