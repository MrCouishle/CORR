import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface dia_no_habil {
  date:Date;
  descripcion:string
}

const dn_habil = new Schema<dia_no_habil>({
  date:{
    type:Date,
    required:true,
    unique:true
  },
  descripcion:{
    type:String,
    required:true,
  }
});

// dn_habil.pre("aggregate", function(next){
//   //this.queryHas('companyId')
// })


export const dia_no_habil_model = model<dia_no_habil>("dia_no_habil", dn_habil);
