import React from "react";
import { TouchableOpacity, Dimensions, Text } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import Colors from "../../assets/Shared/Colors";

const SignInWithOAuth = ({ navigation }) => {
  // Warm up the android browser to improve UX
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  // const onPress = React.useCallback(async () => {
  //   try {
  //     const { createdSessionId, setActive } = await startOAuthFlow();
  //     console.log(createdSessionId)
  //     if (createdSessionId) {
  //       setActive({ session: createdSessionId });

  //       // Use the navigation prop to navigate to the 'Home' screen
  //       navigation.navigate('Home');
  //     } else {
  //       // Use signIn or signUp for next steps such as MFA
  //     }
  //   } catch (err) {
  //     console.error("OAuth error", err);
  //   }
  // }, [navigation]);

  const onPress = () => {
    navigation.navigate('Home');
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 16,
        marginTop: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 90,
        alignItems: "center",
        width: Dimensions.get("screen").width * 0.8,
      }}
    >
      <Text style={{ fontSize: 17, color: Colors.white, fontFamily: "appfont" }}>
        Login with Google{" "}
      </Text>
    </TouchableOpacity>
  );
};

export default SignInWithOAuth;
