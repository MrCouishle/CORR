import { Schema, model } from "mongoose";

interface pdf_res {
    llave:String,
    archivo:String
}

const pdf_res_schema = new Schema<pdf_res>({
    llave:{
        type:String,
        unique:true
    },
    archivo:{
        type:String,
    }
},{versionKey:false});

export const pdf_res_model = model<pdf_res>("pdf_res", pdf_res_schema)