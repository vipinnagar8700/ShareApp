import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Medical = () => {
    return (
        <View>

            <View style={styles.container}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Allergies
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Yes
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Current Medications
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Yes
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Past Medications
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Yes
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Chronic Disease
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Covid
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Injuries
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Accident
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Surgeries
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Heart
                    </Text>
                </View>
            </View>


        </View>
    )
}

export default Medical


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