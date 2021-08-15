import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const AddCharScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Add a new chat",
		});
	}, [navigation]);
	return (
		<View style={styles.container}>
			<Text>AddChat</Text>
		</View>
	);
};

export default AddCharScreen;

const styles = StyleSheet.create({
	container: {},
});
