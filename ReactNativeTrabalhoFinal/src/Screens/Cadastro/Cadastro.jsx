
import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import api from "../../api/api";
import Header from "./Header";

function Form() {
  const [data, setData] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [funcionario, setFuncionario] = useState()

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    }
    if (funcionario != null) {
      api.post(`/funcionario`, funcionario, { headers: headers })

        .then(response => {
          console.log(response)
          setData(response.data);
          alert("Usuario cadastrado com sucesso");

        })
        .catch(error => {
          console.log(error)
          alert("Não foi possivel cadastrar");

        })
    }
  }, [funcionario])


  function handleNomeChange(nome) {
    setNome(nome);
  }
  function handleCpfChange(cpf) {
    setCpf(cpf);
  }

  function handleButtonPress() {
    const funcionario = {
      cpf: cpf,
      nome: nome
    }
    setFuncionario(funcionario)

  }

  return (
    <>
      <Header title="Cadastro." />
      <View style={styles.container}>
        <Text style={styles.title}>
          Preencha o os campos abaixo para adiconar novo funcionario:
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          onChangeText={handleNomeChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a cpf"
          keyboardType={"numeric"}
          onChangeText={handleCpfChange}
        />

        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default Form;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inputContainer: {
    margin: 25,
    alignItems: "stretch",
  },
  topImage: {
    margin: 20,
  },
  title: {
    fontSize: 20,
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "stretch",
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: "#134fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
