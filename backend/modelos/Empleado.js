// models/Empleado.js
import mongoose from "mongoose";

const EmpleadoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    dni: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    puesto: { type: String, required: true },
    fechaAlta: { type: Date, required: true },
    salario: { type: Number, required: true },
    imagen: { type: String, required: false },
  },
  {
    collection: "empleados",
  }
);

export default mongoose.model("Empleado", EmpleadoSchema);
