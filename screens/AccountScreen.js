// screens/AccountScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { createAccount } from "../services/accountService";

export default function AccountScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = async () => {
    try {
      const accountData = { UserName: username, Password: password };
      const response = await createAccount(accountData);
      Alert.alert("Success", "Account created successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <Text>Username</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />
      <Button title="Create Account" onPress={handleCreateAccount} />
    </View>
  );
}
