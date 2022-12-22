import { Schema, model } from "mongoose";

interface pdf {
    llave:String,
    archivo:String
}

const pdf_schema = new Schema<pdf>({
    llave:{
        type:String,
        unique:true
    },
    archivo:{
        type:String,
    }
},{versionKey:false});

export const pdf_model = model<pdf>("pdf", pdf_schema)