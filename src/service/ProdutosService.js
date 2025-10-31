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

//ler todos (snapshot em tempo real)
export const subscribeProdutos = (callback) => {
    const q = query(produtosCollection, orderBy("createAt", "desc"));
    return onSnapshot(q, (snapshot)=>{
        const itens = snapshot.docs.map((d) => ({id: d.id, ...d.data()}));
        callback(itens);
    });
};

//ler todos
export const obterProdutos = async () => {
    const snap = await getDocs (produtosCollection);
    return snap.docs.map((d) => ({id: d.id, ...d.data}));
};

//ler um por id
export const obterProdutosPorId = async (id) =>{
    const docRef = doc(db, "produtos", id);
    const d = await getDoc(docRef);
    if (!d.exists()) return null;
    return {id: d.id, ...d.data()};
};

//Atualizar
export const atualizarproduto = async (id, dados) =>{
    const docRef = doc(db, "produtos", id);
    await updateDoc(docRef, { ...dados, updatedAt: serverTimestamp()});
};

//deletar
export const deletarProduto = async (id) => {
    const docRef = doc(db, "produtos", id);
    await deleteDoc(docRef);
};


