export async function buscarAtendimentos() {
    const resposta = await fetch(
    "http://localhost:3000/atendimentos"
);
    const dados = await resposta.json();
    return dados;
}