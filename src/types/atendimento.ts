import { z } from "zod";

export const atendimentoSchema = z.object({
    id: z.coerce.number(),
    nomePaciente: z.string(),
    tipoAtendimento: z.string(),
    data: z.string(),
    status: z.string()
});