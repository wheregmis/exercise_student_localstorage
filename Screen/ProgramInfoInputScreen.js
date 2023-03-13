import React from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function ProgramInfoInputScreen({ route, navigation }) {
  const [program, setProgram] = React.useState("");
  const [gpa, setGpa] = React.useState("");

  const student = {
    firstName: route.params.student.firstName,
    lastName: route.params.student.lastName,
    email: route.params.student.email,
    program: program,
    gpa: gpa,
  };
  return (
    <View className="m-5">
      <Text>Program Name</Text>
      <TextInput
        className="border-2 border-gray-400 h-8"
        value={program}
        onChangeText={(text) => setProgram(text)}
      />
      <Text>GPA</Text>
      <TextInput
        className="border-2 border-gray-400 h-8"
        value={gpa}
        onChangeText={(text) => setGpa(text)}
      />

      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("ChoiceInfoInputScreen", { student });
        }}
      />
    </View>
  );
}
