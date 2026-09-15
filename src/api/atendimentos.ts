import { atendimentoSchema } from "../types/atendimento.js";
export async function buscarAtendimentos() {
    try {
    const resposta = await fetch(
    "http://localhost:3000/atendimentos"
);
    if (!resposta.ok) {
        throw new Error("Erro ao buscar atendimentos");
    }

    const dados = await resposta.json();
    const dadosValidados = atendimentoSchema.array().parse(dados);

    return dadosValidados;

} catch (erro) { 
    console.error("Não foi possível buscar os atendimentos:", erro);
}
}