// conexion a base de datos
import { conexion } from "../database/database.js"

// captura erroes de las validaciones
import { validationResult } from "express-validator"

//encriptacion de contraseña, registro de usuarios
import { encriptarContra } from "../config/bcryptjs.js"

// transporte que contiene la configuracion de envio de correos 
import { transporter } from "../config/email.js"
import { generarRandom } from "../config/passwordRamdom.js"

// registro de usuarios
export const Store = async (req, res) => {
  try {
    const error = validationResult(req)

    if (!error.isEmpty()) {
      return res.status(400).json(error)
    }

    const { nombre, apellidos, correo, numero_documento, tipo_documento, contrasenia, especialidad, empresa, rol } = req.body

    // captura la imagen que venga por el cuerpo de la solicitud
    let img = req.file.originalname
    
    // contaseña para encriptar
    const passwordCrypt = await encriptarContra(contrasenia)


    let sql = `
    INSERT INTO usuarios
     (fk_roles, us_nombre, us_apellidos, us_correo, us_numero_documento, us_tipo_documento, us_contrasenia, us_especialidad, us_empresa, us_imagen)
      VALUES 
     ( '${rol}','${nombre}','${apellidos}','${correo}','${numero_documento}','${tipo_documento}','${passwordCrypt}','${especialidad}','${empresa}', '${img}'
     )
    `
    const [resultadoUser] = await conexion.query(sql)

    if (resultadoUser.affectedRows > 0) {
      res.status(200).json({
        "Mensaje": "Registro de usuario exitoso"
      })
    } else {
      return res.status(404).json({
        "Mensaje": "No se pudo registrar usuario"
      })
    }
  } catch (error) {
    return res.status(500).json({
      "Mensaje": "Error en el servidor", error
    })
  }
}

export const ListarUsuarios = async (req, res) => {
  try {
    let sql = "SELECT idUsuarios, us_nombre,us_apellidos,us_correo, us_tipo_documento, us_numero_documento, us_contrasenia ,us_especialidad ,us_empresa,rol_nombre FROM usuarios INNER JOIN roles ON fk_roles = idRoles"

    const [resultadoUser] = await conexion.query(sql)

    if (resultadoUser.length > 0) {
      res.status(200).json({
        "Mensaje": "Usuarios encontrado",
        resultadoUser
      })
    }
    else {
      return res.status(404).json(
        { "Mensaje": "No se encontraron usuarios" }
      )
    }
  } catch (error) {
    return res.status(500).json({ "Mensaje": "Error en el servidor", error })
  }
}

export const actualizarUsuario = async (req, res) => {
  try {
    const error = validationResult(req)

    if (!error.isEmpty()) {
      return res.status(400).json(error)
    }

    let id = req.params.id
    const { nombre, apellidos, correo, numero_documento, tipo_documento, contrasenia, especialidad, empresa, rol } = req.body
    let sql = `
    update usuarios set
    fk_roles = '${rol}', us_nombre = '${nombre}', us_apellidos= '${apellidos}', us_correo= '${correo}',
    us_numero_documento= '${numero_documento}', us_tipo_documento= '${tipo_documento}', us_contrasenia= '${contrasenia}',
    us_especialidad= '${especialidad}', us_empresa = '${empresa}' where idUsuarios = '${id}' 
    `
    const [reActualizar] = await conexion.query(sql)

    if (reActualizar.affectedRows > 0) {
      res.status(200).json({
        "Mensaje": "Usuario Actualizado",
        reActualizar
      })
    }
    else {
      return res.status(404).json({
        "Mensaje": "No se encontro usuario para actulizar"
      })
    }
  } catch (error) {
    return res.status(500).json({ "Mensaje": "Error en el servidor", error })
  }
}

export const EliminarUsuario = async (req, res) => {
  try {
    let id = req.params.id
    let sqlDelete = `delete from usuarios where idUsuarios = ${id}`
    console.log(sqlDelete)

    const [eliminarUs] = await conexion.query(sqlDelete)
    if (eliminarUs.affectedRows > 0) {
      res.status(200).json({
        "Mensaje": "Usuario Eliminado",
        eliminarUs
      })
    } else {
      return res.status(404).json({
        "Mensaje": "Usuarios no Econtrado"
      })
    }
  } catch (error) {
    return res.status(500).json({ "Mensaje": "Error en el servidor", error })
  }
}

export const ListarUsuarioId = async (req, res) => {
  try {
    let id = req.params.id
    let sqlListarId = `SELECT idUsuarios, us_nombre,us_apellidos,us_correo, us_tipo_documento, us_numero_documento, us_contrasenia ,us_especialidad ,us_empresa,rol_nombre FROM usuarios INNER JOIN roles ON fk_roles = idRoles where idUsuarios = ${id} `

    const [resultado] = await conexion.query(sqlListarId)
    if (resultado.length > 0) {
      res.status(200).json(resultado)
    } else {
      return res.status(404).json({
        "Mensaje": "Usuario no encontrado"
      })
    }
  } catch (error) {
    return res.status(500).json({ "Mensaje": "Error en el servidor", error })
  }
}


export const ListarTecnicos = async (req, res) => {
  try {
    let sqlListarIdT = `
    SELECT idUsuarios,us_nombre, rol_nombre FROM usuarios JOIN roles ON idRoles = fk_roles WHERE rol_nombre = 'tecnico'`

    const [resultado] = await conexion.query(sqlListarIdT)
    if (resultado.length > 0) {
      res.status(200).json(resultado)
    } else {
      return res.status(404).json({
        "Mensaje": "Usuario no encontrado"
      })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

//plantilla html de correos electronicos
import { emailHtml } from "../config/emailhtml.js"

// funcion que envia correos para recuperar contraseña
export const recuperaraContra = async (req, res) => {
  try {
    const error = validationResult(req)

    if (!error.isEmpty()) {
      return res.status(400).json(error)
    }
    const { numero_identificacion } = req.body

    let sql = `select * from usuarios where us_numero_documento = ${numero_identificacion}`

    const [usuario] = await conexion.query(sql)

    if (usuario.length === 0) {
      return res.status(404).json({ estado: false, mensaje: "no se encontro usuario" })
    } else {
      let newPassword = generarRandom()

      const result = await transporter.sendMail({
        from: '"MachinApp" <machinappsena@gmail.com>', // sender address
        to: usuario[0].us_correo, // list of receivers
        subject: "Recuperacion de contraseña", // Subject line
        html: emailHtml(usuario[0].us_nombre, newPassword)
      });
      // encriptar contraseña
      const newPasswordCrypt = await encriptarContra(newPassword)

      let sqlActualizarContra = `update usuarios set us_contrasenia= '${newPasswordCrypt}' where idUsuarios = ${usuario[0].idUsuarios}`
      const [resu] = await conexion.query(sqlActualizarContra)
      res.status(200).json({ "mensage": "contraseña recuperada", 'estado': true, result })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}