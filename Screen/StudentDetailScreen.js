import * as React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";

export default function StudentDetailScreen({ route, navigation }) {
  const [student, setStudent] = React.useState(route.params.student);

  return (
    <SafeAreaView>
      <View className="flex flex-col justify-evenly items-start mt-6">
        <View className="flex flex-row justify-evenly items-center">
          <Text className="text-xl ml-5">First Name</Text>
          <View className="h-5 w-1 bg-gray-500 ml-5"></View>
          <Text className="text-xl ml-5 border-1 border-gray-600">
            {student.firstName}
          </Text>
        </View>

        <View className="flex flex-row justify-evenly items-center">
          <Text className="text-xl ml-5">Last Name</Text>
          <View className="h-5 w-1 bg-gray-500 ml-5"></View>
          <Text className="text-xl ml-5 border-1 border-gray-600">
            {student.lastName}
          </Text>
        </View>

        <View className="flex flex-row justify-evenly items-center">
          <Text className="text-xl ml-5">Email</Text>
          <View className="h-5 w-1 bg-gray-500 ml-5"></View>
          <Text className="text-xl ml-5 border-1 border-gray-600">
            {student.email}
          </Text>
        </View>

        <View className="flex flex-row justify-evenly items-center">
          <Text className="text-xl ml-5">Program</Text>
          <View className="h-5 w-1 bg-gray-500 ml-5"></View>
          <Text className="text-xl ml-5 border-1 border-gray-600">
            {student.program}
          </Text>
        </View>

        <View className="flex flex-row justify-evenly items-center">
          <Text className="text-xl ml-5">GPA</Text>
          <View className="h-5 w-1 bg-gray-500 ml-5"></View>
          <Text className="text-xl ml-5 border-1 border-gray-600">
            {student.gpa}
          </Text>
        </View>

        <View className="flex flex-row justify-evenly items-center">
          <Text className="text-xl ml-5">First Choice</Text>
          <View className="h-5 w-1 bg-gray-500 ml-5"></View>
          <Text className="text-xl ml-5 border-1 border-gray-600">
            {student.firstChoice}
          </Text>
        </View>

        <View className="flex flex-row justify-evenly items-center">
          <Text className="text-xl ml-5">Second Choice</Text>
          <View className="h-5 w-1 bg-gray-500 ml-5"></View>
          <Text className="text-xl ml-5 border-1 border-gray-600">
            {student.secondChoice}
          </Text>
        </View>

        <View className="flex flex-row justify-evenly items-center">
          <Text className="text-xl ml-5">Third Choice</Text>
          <View className="h-5 w-1 bg-gray-500 ml-5"></View>
          <Text className="text-xl ml-5 border-1 border-gray-600">
            {student.thirdChoice}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
