import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,
<<<<<<< HEAD
  ScrollView


} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../api/api";
import Funcionario from '../../database/ModelFuncionario'

const Lista = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    Funcionario.createTable()

    const getFunFromApiAsync = async () => {
      api("/funcionario")
        .then((response) => {
          setData(response.data);

          console.log(response.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
=======
  Button,
  onPress,
  Icon,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


import api from "../../api/api";
const Lista = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  
  
  const searchFilterFunction = (text) => {
    
    if (text) {
      
      const newData = data.filter(function (item) {
        
        const itemData = item.nome ? item.nome.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
    
      setFilteredDataSource(data);
      
      setSearch(text);
    }
  };
  
  const getFunFromApiAsync = async () => {
    api("/funcionario") 
    .then((response) => {
      setData(response.data);
      setFilteredDataSource(response.data)
      setLoading(false);
      console.log(response.data);
    })
    
      .catch((err) => {
        console.log(err.response);
      })
 
  };

  useEffect(() => {
>>>>>>> 211834d3a6f4839a3a937a9e11a7fa6d9a9fb465
    getFunFromApiAsync();
  
  }, []);
  

  // const addFuncionariosOffline = () => {
  //   const props = {
  //     id: 380, nome: "Wonking great", cpf: "66959069041"
  //   }
  //   Funcionario.create(props)
  //   console.log(props)
  // }

  const listaFuncionarioOffline = async () => {
    const options = {
      columns: 'id,nome,cpf',
      where: {
        id_gteq: 1
      },
    }
    setQuery(await Funcionario.query(options))
  }


  return (
    <View style={styles.background}>
<<<<<<< HEAD
      <TextInput
        placeholderTextColor="#3337"
        style={styles.input}
        placeholder="Procurar funcionario por nome/id"
        autoCorrect={false}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.itemsContainer}>

=======
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          
        />
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View>
>>>>>>> 211834d3a6f4839a3a937a9e11a7fa6d9a9fb465
          <FlatList
            data={filteredDataSource}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#000",
                  marginBottom: 20,
                  borderRadius: 7,
                  backgroundColor: "#ffff",
                }}
              >
                <View style={{ marginLeft: 145 }}>
<<<<<<< HEAD
                  <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('Info',
                      {
                        itemid: item.id,
                        itemnome: item.nome,
                        itemcpf: item.cpf
                      });
                  }}>
=======
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("Info", {
                        itemid: item.id,
                        itemnome: item.nome,
                        itemcpf: item.cpf,
                      });
                    }}
                  >
>>>>>>> 211834d3a6f4839a3a937a9e11a7fa6d9a9fb465
                    <Text style={styles.buttonText}>Editar/Deletar</Text>
                  </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 10, marginLeft: 10 }}>
                  ID: {item.id}
                </Text>
                <Text style={{ marginTop: 15, marginLeft: 10 }}>
                  CPF: {item.cpf}
                </Text>
                <Text style={{ marginBottom: 10, marginLeft: 10 }}>
                  NOME: {item.nome}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            onRefresh={() => getFunFromApiAsync()}
            refreshing={loading}
            
          ></FlatList>
        </View>
      </View>
      <TouchableOpacity style={[styles.button, { marginHorizontal: '30%', marginVertical: '5%' }]} onPress={listaFuncionarioOffline}>
        <Text style={styles.buttonText}>Pesquisa Offline</Text>
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.itemsContainer}>
          <FlatList
            data={query}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#000",
                  marginBottom: 20,
                  borderRadius: 7,
                }}
              >
                <Text style={{ marginTop: 10, marginLeft: 10 }}>
                  ID: {item.id}
                </Text>
                <Text style={{ marginTop: 15, marginLeft: 10 }}>
                  CPF: {item.cpf}
                </Text>
                <Text style={{ marginBottom: 10, marginLeft: 10 }}>
                  NOME: {item.nome}
                </Text>

              </View>
            )}
            keyExtractor={(item2, index) => index.toString()}
          ></FlatList>
        </View>
      </View>

      {/* <TouchableOpacity style={styles.button} onPress={addFuncionariosOffline}>
        <Text style={styles.buttonText}>Add Offline</Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default Lista;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#3337",
  },
  input: {
    backgroundColor: "#FFF",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: "#333",
    fontSize: 17,
    borderRadius: 7,
    padding: 15,
  },
  itemsContainer: {
    backgroundColor: "#f4f5f9",
    width: "90%",
    justifyContent: "center",
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
    borderRadius: 7,
  },
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: "#EEE",
    marginTop: 20,
    padding: 30,
  },
  button: {
    marginTop: 10,
    height: 50,
    width: 150,
    backgroundColor: "#ffd913",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
<<<<<<< HEAD
});
=======
}); 
>>>>>>> 211834d3a6f4839a3a937a9e11a7fa6d9a9fb465
