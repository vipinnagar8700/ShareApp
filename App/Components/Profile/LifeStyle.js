import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LifeStyle = () => {
    return (
        <View >

            <View style={styles.container}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Smoking Habits
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        add details
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Alcohol consumption
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        add details
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Activity level
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        add details
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Food Preference
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        add lifestyle
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Occupation
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        add occupation
                    </Text>
                </View>
            </View>

        </View>
    )
}

export default LifeStyle


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10, marginTop: 10
    },
    containera: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },


    column: {
        flex: 1, // Each column takes equal space
        // Add additional styling for each column if needed
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginBottom: 10,
    },
});