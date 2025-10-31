import {
    produtosCollection,
    addDoc,
    doc,
    getDoc,
    getDocs,
    query,
    orderBy,
    onSnapshot,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    db
} from "./firebaseConnections";

import {collection} from "firebase/firestore";

//Criar produto
export const criarProduto = async (produto) =>{
    const payload ={
        nome: produto.nome,
        preco: produto.preco,
        descricao: produto.descricao,
        createdAt: serverTimestamp()
    };
    const ref = await addDoc(produtosCollection,payload);
    return ref.id;
};

//Consultar produtos
export const subscribeProdutos = (callback) => {
    const q = query(produtosCollection, orderBy("createAt", "desc"));
    return onSnapshot(q, (snapshot)=>{
        const itens = snapshot.docs.map((d) => ({id: d.id, ...d.data()}));
        callback(itens);
    });
};