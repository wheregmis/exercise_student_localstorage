import React from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function ChoiceInfoInputScreen({ route, navigation }) {
  const [firstChoice, setFirstChoice] = React.useState("");
  const [secondChoice, setSecondChoice] = React.useState("");
  const [thirdChoice, setThirdChoice] = React.useState("");

  const student = {
    firstName: route.params.student.firstName,
    lastName: route.params.student.lastName,
    email: route.params.student.email,
    program: route.params.student.program,
    gpa: route.params.student.gpa,
    firstChoice: firstChoice,
    secondChoice: secondChoice,
    thirdChoice: thirdChoice,
  };

  return (
    <View className="m-5">
      <Text>First Choice</Text>
      <TextInput
        className="border-2 border-gray-400 h-8"
        value={firstChoice}
        onChangeText={(text) => setFirstChoice(text)}
      />
      <Text>Second Choice</Text>
      <TextInput
        className="border-2 border-gray-400 h-8"
        value={secondChoice}
        onChangeText={(text) => setSecondChoice(text)}
      />
      <Text>Third Choice</Text>
      <TextInput
        className="border-2 border-gray-400 h-8"
        value={thirdChoice}
        onChangeText={(text) => setThirdChoice(text)}
      />
      <Button
        title="Add Student"
        onPress={() => {
          navigation.navigate("StudentListScreen", { student });
        }}
      />
    </View>
  );
}
