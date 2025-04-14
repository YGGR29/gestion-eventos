import express from "express";
import {
  obtenerPorId,
  existeCedula,
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
  existeEmail,
} from "../Controller/usuarioController.js";

const router = express.Router();

// Peticiones GET
router.get("/", obtenerUsuarios); // Obtener todos los usuarios
router.get("/existeCedula/:cedula", existeCedula); // Verificar si existe cedula
router.get("/existeEmail/:email", existeEmail); // Verificar si existe email

router.get("/:cedula", obtenerPorId); // Obtener usuario con id

//Peticiones POST
router.post("/", crearUsuario); //registrar usuario

//Peticiones PUT
router.put("/:cedula", actualizarUsuario); // Actualizar usuario

//Peticiones DELETE
router.delete("/:cedula", eliminarUsuario); // Eliminar usuario

export default router;
