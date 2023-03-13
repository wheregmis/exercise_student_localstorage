import React from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function StudentInfoInputScreen({ navigation }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const student = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
  return (
    <View className="m-5">
      <Text>First Name</Text>
      <TextInput
        className="border-2 border-gray-400 h-8"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <Text>Last Name</Text>
      <TextInput
        className="border-2 border-gray-400 h-8"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <Text>Email</Text>
      <TextInput
        className="border-2 border-gray-400 h-8"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Button
        className="mt-6"
        title="Next"
        onPress={() => {
          navigation.navigate("ProgramInfoInputScreen", { student });
        }}
      />
    </View>
  );
}
