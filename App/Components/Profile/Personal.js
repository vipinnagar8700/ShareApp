import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Personal = () => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Name
                    </Text>
                    <Text style={{ fontFamily: 'appfont-medium', fontSize: 20, fontWeight: 300, color: 'gray' }}>
                        Vipin Nagar
                    </Text>
                </View>
                <View style={styles.column}>
                </View>
                <View style={styles.column}>
                    <Image
                        source={require('../../../assets/images/user.jpg')} // Replace with the actual path or use uri for network images
                        style={styles.userImage}
                    />
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Contact Number
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        +91-8700504216
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Email
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        vipinnagar@gmail.com
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Gender
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Male
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Date of Birth
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        2002-09-14
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Blood Group
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        O-
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Marital Status
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Single
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Height
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        5.9
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Weight
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        65 kg
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Address
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Jhatta
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        City
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Noida
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: 'gray', borderWidth: 0.2 }} />
            <View style={styles.containera}>
                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        State
                    </Text>

                </View>

                <View style={styles.column}>
                    <Text style={{ fontFamily: 'appfont-light', fontSize: 16, fontWeight: 300, color: 'gray' }}>
                        Uttarpradesh
                    </Text>
                </View>
            </View>

        </View>
    )
}

export default Personal


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