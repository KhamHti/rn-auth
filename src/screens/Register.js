import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);

  const val = useContext(AuthContext);
  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <Text>{val}</Text>
        <TextInput
          style={style.input}
          onChangeTex={(text) => setName(text)}
          placeholder="Full Name"
          value={name}
        />
        <TextInput
          style={style.input}
          onChangeTex={(text) => setEmail(text)}
          placeholder="Email"
          value={email}
        />

        <TextInput
          style={style.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />

        <Button title="Register" />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={style.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    marginHorizontal: 16,
    paddingVertical: 10,
    marginLeft: 10,
    paddingLeft: 10,
  },
  link: {
    color: "blue",
    marginLeft: 10,
  },
});

export default Register;
