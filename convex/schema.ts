import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({      
    plantas: defineTable({
        nombreComun: v.string(),
        nombreCientifico: v.string(),
        categoria: v.array(v.string()),
        altura: v.string(),
        diametroDeCopa: v.string(),
        floracion: v.string(),
        velocidadDeCrecimiento: v.string(),
        requerimientoHidrico: v.string(),
        polinizadores: v.array(v.string()),
        tamano: v.string(),
        ecorregion: v.array(v.number()),
    }),
});