import { v } from "convex/values";
import { query } from "./_generated/server";

export const getPlantasByEcorregion = query({
    args:{
        ecorregion: v.array(v.number())
    }, handler: async(ctx, args)=>{
        const plantas = await ctx.db
            .query("plantas")
            .order("desc")
            .collect();

        const filtro = plantas.filter((planta)=>
            planta.ecorregion.some((eco: number)=>
                args.ecorregion.includes(eco)
            )
        )

        return filtro;
    }
})