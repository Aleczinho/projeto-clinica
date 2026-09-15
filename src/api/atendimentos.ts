export async function buscarAtendimentos() {
    try {
    const resposta = await fetch(
    "http://localhost:3000/atendimentos"
);
    if (!resposta.ok) {
        throw new Error("Erro ao buscar atendimentos");
    }

    const dados = await resposta.json();
    return dados;

} catch (erro) { 
    console.error("Não foi possível buscar os atendimentos:", erro);
}
}