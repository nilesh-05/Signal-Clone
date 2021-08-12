import React, { useEffect, useState } from "react";
import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	View,
	Platform,
} from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace("Home");
			}
		});
		return unsubscribe;
	}, []);
	const signIn = () => {};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			enabled
			style={styles.container}
		>
			<StatusBar style="light" />
			<Image
				source={{
					uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
				}}
				style={{
					width: 200,
					height: 200,
				}}
			/>
			<View style={styles.inputContainer}>
				<Input
					placeholder="Email"
					autoFocus
					type="email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder="Password"
					type="password"
					secureTextEntry
					value={password}
					onChangeText={(pass) => setPassword(pass)}
				/>
			</View>
			<Button
				title="Login"
				containerStyle={styles.button}
				raised
				onPress={signIn}
			/>
			<Button
				title="Register"
				type="outline"
				raised
				containerStyle={styles.button}
				onPress={() => navigation.navigate("Register")}
			/>
			<View style={{ height: 100 }} />
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	button: {
		width: 200,
		marginTop: 10,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white",
	},
	inputContainer: {
		marginTop: 20,
		width: 300,
	},
});
