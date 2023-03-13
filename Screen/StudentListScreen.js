import * as React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  Alert,
  AsyncStorage,
} from "react-native";

export default function StudentListScreen({ route, navigation }) {
  const [students, setStudents] = React.useState([]);

  async function addStudents() {
    try {
      await AsyncStorage.setItem("students", JSON.stringify(students));
    } catch (error) {
      console.log(error);
    }
  }

  async function getStudents() {
    try {
      const students = await AsyncStorage.getItem("students");
      if (students !== null) {
        setStudents(JSON.parse(students));
      }
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    if (route.params?.student) {
      const newStudent = {
        id: students.length + 1,
        firstName: route.params.student.firstName,
        lastName: route.params.student.lastName,
        email: route.params.student.email,
        program: route.params.student.program,
        gpa: route.params.student.gpa,
        firstChoice: route.params.student.firstChoice,
        secondChoice: route.params.student.secondChoice,
        thirdChoice: route.params.student.thirdChoice,
      };

      // check if student already exists
      const studentExists = students.some(
        (student) => student.email === newStudent.email
      );

      if (studentExists) {
        Alert.alert("Student already exists");
        getStudents();
        return;
      }
      setStudents((students) => [...students, newStudent]);
      addStudents();
    }
  }, [route.params?.student]);

  return (
    <SafeAreaView>
      <View className="flex flex-col justify-center items-center mt-4">
        <Text className="text-xl">Student Information List</Text>
        <View className="h-2 w-full bg-gray-500"></View>
      </View>
      <View className="flex flex-col justify-around items-stretch mt-6">
        {students.length > 0 || students[0] != undefined ? (
          students.map((student) => (
            <View
              className="flex flex-row justify-evenly items-center mt-6 border-2 border-gray-400"
              key={student.firstName}
            >
              <Text className="text-xl ml-2">{student.firstName}</Text>

              <View className="h-full w-1 bg-gray-500"></View>

              <View className="flex flex-col justify-center items-center">
                <Text className="text-xl ml-2">Program</Text>
                <View className="h-1 w-full bg-gray-500"></View>
                <Text className="text-xl ml-2">{student.program}</Text>
              </View>

              <View className="h-full w-1 bg-gray-500"></View>

              <View className="flex flex-col justify-center items-center">
                <Text className="text-xl ml-2">First Choice</Text>
                <View className="h-1 w-full bg-gray-500"></View>
                <Text className="text-xl ml-2">{student.firstChoice}</Text>
              </View>

              <Button
                title="View"
                onPress={() =>
                  navigation.navigate("StudentDetailScreen", { student })
                }
              />
            </View>
          ))
        ) : (
          <Text className="text-xl">No Students</Text>
        )}
        <Button
          className="mt-4 mb-4"
          title="Add Student"
          onPress={() => navigation.navigate("StudentInfoInputScreen")}
        />
      </View>
    </SafeAreaView>
  );
}
