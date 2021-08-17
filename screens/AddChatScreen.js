import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { Icon } from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
	const [input, setInput] = useState("");

	const createChat = async () => {
		await db
			.collection("chats")
			.add({
				chatName: input,
			})
			.then(() => {
				navigation.goBack();
			})
			.catch((err) => alert(err.message));
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Add a new chat",
			headerBackTitle: "Chats",
		});
	}, [navigation]);
	return (
		<View style={styles.container}>
			<Input
				placeholder="Enter a chat name"
				value={input}
				onChangeText={(text) => setInput(text)}
				leftIcon={
					<Icon name="wechat" size={24} color="black" type="antdesign" />
				}
			/>
			<Button onPress={createChat} title="Create new chat" />
		</View>
	);
};

export default AddChatScreen;

const styles = StyleSheet.create({
	container: {},
});
