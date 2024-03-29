/* routeusuario */
import { Router } from "express";
import {listarMantenimiento, registrarMantenimiento, eliminarMantenimiento, actualizarMantenimiento, listarMantenimientoPorId, listarMantenimientoPorId_actividades , listarRequerimiento5, listarRequerimiento17} from "../controllers/mantenimientoController.js";
const mantenimiento= Router();
/* lista general */
mantenimiento.get('/listar',listarMantenimiento);
/* lista por ID y activdades*/
mantenimiento.get('/listar/:idMantenimiento', listarMantenimientoPorId_actividades);

/* requerimineto 5*/
mantenimiento.get('/listarRequerimiento/', listarRequerimiento5);

/* listar es el requerimiento 17 */
mantenimiento.get('/listarRequerimiento17/:fecha_realizacion', listarRequerimiento17);

/* lista por ID */
mantenimiento.get('/listarPorIdMantenimiento/:idMantenimiento', listarMantenimientoPorId);

/* requerimiento 14 y registrar */
mantenimiento.post('/registrar',registrarMantenimiento);
/* eliminar */
mantenimiento.delete('/eliminar/:id_mantenimiento',eliminarMantenimiento);
/* actualizar */
mantenimiento.put('/actualizar/:id_mantenimiento',actualizarMantenimiento);



export default mantenimiento
