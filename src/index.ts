import { buscarAtendimentos } from "./api/atendimentos.js";

async function iniciar() {
    const atendimentos = await buscarAtendimentos();

    console.log(atendimentos);
}

iniciar();