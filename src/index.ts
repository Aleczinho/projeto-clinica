import { buscarAtendimentos } from "./api/atendimentos.js";
import { atendimentoSchema } from "./types/atendimento.js";

async function iniciar() {
    const atendimentos = await buscarAtendimentos();

    console.log(atendimentos);
}

iniciar();