import { Alert, Button, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, {useState, useContext } from "react";
import { ProdutosContext, ProdutosProvider } from "../components/ProdutosContext";

export default function CadastroScreen() {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");

    const {adicionarProduto} = useContext(ProdutosContext);

    const handlerCadastro = () =>{
      if (nome==="" || preco==="" || descricao===""){
        Platform.OS ==="web"
        ? window.alert("Por favor, preencha todos os campos.")
        :Alert.alert("Erro!", "Por favor, preencha todos os campos.");
        return;
      }

      const precoConvertido = parseFloat(preco);
      if (isNaN(precoConvertido)){
        Platform.OS ==="web"
        ? window.alert("Digite um preço válido.")
        :Alert.alert("Erro!", "Digite um preço válido.");
        return;
    }

    const novoProduto={
      id: Math.random().toString(),
      nome,
      preco: precoConvertido,
      descricao,
    };

    adicionarProduto(novoProduto);

    Platform.OS ==="web"
    ? window.alert("Produto cadastrado com sucesso!")
    :Alert.alert("Sucesso!", "Produto cadastrado com sucesso!");

    setNome("");
    setPreco("");
    setDescricao("");
  };
    return (

      <View >
        <Text>Nome do Produto</Text>
        <TextInput
        value={nome}
        onChange={setNome}
        placeholder="Digite o nome do produto"
        />

        <Text>Descrição</Text>
        <TextInput
        value={descricao}
        onChange={setDescricao}
        placeholder="Detalhes do Produto" 
        multiline
        />

        <Text>Preço</Text>
        <TextInput
        value={preco}
        onChange={setPreco}
        placeholder="Preço do produto"
        />

        <Button title="Cadastrar" onPress={handlerCadastro}/>
      
      </View>
    );
  }