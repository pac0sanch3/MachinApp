/**
 * @swagger
 * /user/registrar:
 *   post:
 *     summary: Registrar Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Emersson"
 *               apellidos:
 *                 type: string
 *                 example: "String"
 *               correo:
 *                 type: string
 *                 example: "String"
 *               numero_documento:
 *                 type: string
 *                 example: "String"
 *               tipo_documento:
 *                 type: string
 *                 example: "String"
 *               contrasenia:
 *                 type: string
 *                 example: "String"
 *               especialidad:
 *                 type: string
 *                 example: "String"
 *               empresa:
 *                 type: string
 *                 example: "String"
 *               rol:
 *                 type: string
 *                 example: "String"
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Iniciar sesión
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               correo:
 *                 type: string
 *                 example: "emerssonramirez11@gmail.com"
 *               contrasenia:
 *                 type: string
 *                 example: "y2sMs6d8ZT"
 *     responses:
 *       200:
 *         description: Usuario autorizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Mensaje:
 *                   type: string
 *                   example: "Usuario autorizado"
 *                 usuario:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       idUsuarios:
 *                         type: integer
 *                         example: 7
 *                       us_contrasenia:
 *                         type: string
 *                         example: "$2a$10$gl5AQmQ0ReXYLQAHED.NcuRtKOS/LFvYgE26yoheLAtZKRAw.spc6"
 *                       rol_nombre:
 *                         type: string
 *                         example: "Administrador"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 */

/**
 * @swagger
 * /user/me:
 *   get:
 *     summary: Listar usuario logueado
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Información del usuario logueado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idUsuarios:
 *                     type: integer
 *                     example: 7
 *                   us_nombre:
 *                     type: string
 *                     example: "Emersson"
 *                   us_apellidos:
 *                     type: string
 *                     example: "Ramirez Ruiz"
 *                   us_correo:
 *                     type: string
 *                     example: "emerssonramirez510@gmail.com"
 *                   us_tipo_documento:
 *                     type: string
 *                     example: "cedula de ciudadania"
 *                   us_numero_documento:
 *                     type: string
 *                     example: "1084330529"
 *                   us_contrasenia:
 *                     type: string
 *                     example: "$2a$10$SVQ9ugm9Yg7EK/A4Azy3ee2HyBQ1tCVr3aIYJH0p6/4UgqtuSnhGO"
 *                   us_especialidad:
 *                     type: string
 *                     example: "Analista y desarrollador de software"
 *                   us_empresa:
 *                     type: string
 *                     example: "SENA Empresa"
 *                   rol_nombre:
 *                     type: string
 *                     example: "Administrador"
 *                   idRoles:
 *                     type: integer
 *                     example: 1
 */

/**
 * @swagger
 * /user/recover-password:
 *   post:
 *     summary: Recuperación de contraseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero_identificacion:
 *                 type: string
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Contraseña recuperada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensage:
 *                   type: string
 *                   example: "Contraseña recuperada"
 *                 estado:
 *                   type: boolean
 *                   example: true
 *                 correo_usuario:
 *                   type: array
 *                   items:
 *                     type: string
 *                     example: "emerssonramirez510@gmail.com"
 */

/**
 * @swagger
 * /user/all:
 *   get:
 *     summary: Listar todos los usuarios (solo administradores)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idUsuarios:
 *                     type: integer
 *                     example: 1
 *                   us_nombre:
 *                     type: string
 *                     example: "Juan Camilo"
 *                   us_apellidos:
 *                     type: string
 *                     example: "Alvarez Molano"
 *                   us_correo:
 *                     type: string
 *                     example: "camilo@gmail.com"
 *                   us_numero_documento:
 *                     type: string
 *                     example: "1079534574"
 *                   us_tipo_documento:
 *                     type: string
 *                     example: "cedula de ciudadania"
 *                   us_contrasenia:
 *                     type: string
 *                     example: "cami3008"
 *                   us_empresa:
 *                     type: string
 *                   rol_nombre:
 *                     type: string
 *                     example: "Administrador"
 *                   rol_descripcion:
 *                     type: string
 *                     example: "administrador del sistema"
 */

/**
 * @swagger
 * /sede/registrarsede:
 *   post:
 *     summary: Registrar una nueva sede
 *     tags:
 *       - sedes:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sede_nombre:
 *                 type: string
 *                 example: "Yamboro"
 *               sede_descripcion:
 *                 type: string
 *                 example: "yamboro descripcion"
 *               sede_direccion:
 *                 type: string
 *                 example: "vereda yamboro"
 *               sede_nombre_centro:
 *                 type: string
 *                 example: "Gestio y desarrollo sur colombiano."
 *               sede_regional:
 *                 type: string
 *                 example: "huila"
 *               sede_municipio:
 *                 type: string
 *                 example: "pitalito"
 *               sede_subdirector:
 *                 type: string
 *                 example: "Jaramillo"
 *               img_sede:
 *                 type: string
 *                 nullable: true
 *                 example: null
 *     responses:
 *       201:
 *         description: Sede registrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Sede registrada exitosamente"
 *                 idSede:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Error al registrar la sede
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se pudo registrar la sede"
 */

/**
 * @swagger
 * /sede/listarsede:
 *   get:
 *     summary: Listar todas las sedes
 *     tags:
 *       - sedes:
 *     responses:
 * 
 *       200:
 *         description: Sedes encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Sedes encontradas"
 *                 resultadoSede:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       idSede:
 *                         type: integer
 *                         example: 1
 *                       sede_nombre:
 *                         type: string
 *                         example: "Yamboro"
 *                       sede_descripcion:
 *                         type: string
 *                         example: "yamboro descripcion"
 *                       sede_direccion:
 *                         type: string
 *                         example: "vereda yamboro"
 *                       sede_nombre_centro:
 *                         type: string
 *                         example: "Gestio y desarrollo sur colombiano."
 *                       sede_regional:
 *                         type: string
 *                         example: "huila"
 *                       sede_municipio:
 *                         type: string
 *                         example: "pitalito"
 *                       sede_subdirector:
 *                         type: string
 *                         example: "Jaramillo"
 *                       img_sede:
 *                         type: string
 *                         nullable: true
 *                         example: null
 *       400:
 *         description: Error al listar las sedes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se encontraron sedes"
 */
/**
 * @swagger
 * /sede/actualizarsede/{id}:
 *   put:
 *     summary: Actualizar una sede existente
 *     tags:
 *       - sedes:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la sede a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sede_nombre:
 *                 type: string
 *                 example: "Yamboro"
 *               sede_descripcion:
 *                 type: string
 *                 example: "yamboro descripcion actualizada"
 *               sede_direccion:
 *                 type: string
 *                 example: "vereda yamboro"
 *               sede_nombre_centro:
 *                 type: string
 *                 example: "Gestio y desarrollo sur colombiano."
 *               sede_regional:
 *                 type: string
 *                 example: "huila"
 *               sede_municipio:
 *                 type: string
 *                 example: "pitalito"
 *               sede_subdirector:
 *                 type: string
 *                 example: "Jaramillo"
 *               img_sede:
 *                 type: string
 *                 nullable: true
 *                 example: null
 *     responses:
 *       200:
 *         description: Sede actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Sede actualizada exitosamente"
 *                 idSede:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Error al actualizar la sede
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se pudo actualizar la sede"
 */
/**
 * @swagger
 * /area/listar:
 *   get:
 *     summary: "Listar todas las áreas"
 *     tags:
 *       - areas:
 *     description: "Devuelve una lista de todas las áreas registradas."
 *     responses:
 *       200:
 *         description: "Lista de áreas encontradas."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Áreas encontradas"
 *                 resultadoArea:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       idArea:
 *                         type: integer
 *                         example: 1
 *                       sede_nombre:
 *                         type: string
 *                         example: "Yamboro"
 *                       area_nombre:
 *                         type: string
 *                         example: "TIC"
 *                       img_area:
 *                         type: string
 *                         format: binary
 *                         nullable: true
 *                         example: null
 */

/**
 * @swagger
 * /area/registrar:
 *   post:
 *     summary: "Registrar una nueva área"
 *     tags:
 *       - areas:
 *     description: "Registra una nueva área en una sede específica."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sede_nombre:
 *                 type: string
 *                 example: "Yamboro"
 *               area_nombre:
 *                 type: string
 *                 example: "TIC"
 *               img_area:
 *                 type: string
 *                 format: binary
 *                 description: "Imagen opcional de la área."
 *     responses:
 *       200:
 *         description: "Área registrada exitosamente."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Área registrada exitosamente"
 */
/**
 * @swagger
 * /area/actualizar:
 *   put:
 *     summary: "Actualizar una área existente"
 *     tags:
 *       - areas:
 *     description: "Actualiza los detalles de una área existente."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idArea:
 *                 type: integer
 *                 example: 1
 *               sede_nombre:
 *                 type: string
 *                 example: "Yamboro"
 *               area_nombre:
 *                 type: string
 *                 example: "TIC"
 *               img_area:
 *                 type: string
 *                 format: binary
 *                 description: "Imagen opcional de la área."
 *     responses:
 *       200:
 *         description: "Área actualizada exitosamente."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Área actualizada exitosamente"
 */
/**
 * @swagger
 * /sitio/registrar:
 *   post:
 *     summary: "Registrar un nuevo sitio"
 *     tags:
 *       - ambientes:
 *     description: "Registra un nuevo sitio en un área específica."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sit_nombre:
 *                 type: string
 *                 example: "Ambiente y14"
 *               tipo_sitio:
 *                 type: string
 *                 example: "Ambiente de formacion"
 *               sit_fecha_registro:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-08-13T05:00:00.000Z"
 *               area_nombre:
 *                 type: string
 *                 example: "TIC"
 *               instructor_encargado:
 *                 type: string
 *                 example: "Juan Camilo"
 *     responses:
 *       200:
 *         description: "Sitio registrado exitosamente."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Sitio registrado exitosamente"
 */

/**
 * @swagger
 * /sitio/listar:
 *   get:
 *     summary: "Listar todos los sitios"
 *     tags:
 *       - ambientes:
 *     description: "Devuelve una lista de todos los sitios registrados."
 *     responses:
 *       200:
 *         description: "Lista de sitios encontrados."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Sitios encontrados"
 *                 resultadoSitio:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       idAmbientes:
 *                         type: integer
 *                         example: 1
 *                       sit_nombre:
 *                         type: string
 *                         example: "Ambiente y14"
 *                       tipo_sitio:
 *                         type: string
 *                         example: "Ambiente de formacion"
 *                       sit_fecha_registro:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-08-13T05:00:00.000Z"
 *                       area_nombre:
 *                         type: string
 *                         example: "TIC"
 *                       instructor_encargado:
 *                         type: string
 *                         example: "Juan Camilo"
 */
/**
 * @swagger
 * /sitio/actualizar:
 *   put:
 *     summary: "Actualizar un sitio existente"
 *     tags:
 *       - ambientes:
 *     description: "Actualiza los detalles de un sitio existente."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idAmbientes:
 *                 type: integer
 *                 example: 1
 *               sit_nombre:
 *                 type: string
 *                 example: "Ambiente y14"
 *               tipo_sitio:
 *                 type: string
 *                 example: "Ambiente de formacion"
 *               sit_fecha_registro:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-08-13T05:00:00.000Z"
 *               area_nombre:
 *                 type: string
 *                 example: "TIC"
 *               instructor_encargado:
 *                 type: string
 *                 example: "Juan Camilo"
 *     responses:
 *       200:
 *         description: "Sitio actualizado exitosamente."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Sitio actualizado exitosamente"
 */

/**
 * @swagger
 * /maquina/fichaTecnica/registrar:
 *   post:
 *     summary: Registra una ficha técnica de una máquina
 *     tags:
 *       - Ficha Técnica
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               placaSena:
 *                 type: string
 *                 description: Código de la máquina
 *                 example: "1002SE"
 *               fiEstado:
 *                 type: string
 *                 description: Estado actual de la máquina
 *                 example: "operacion"
 *               fk_sitio:
 *                 type: string
 *                 description: ID del sitio al que pertenece la máquina
 *                 example: "1"
 *               fk_tipo_ficha:
 *                 type: string
 *                 description: ID del tipo de ficha técnica
 *                 example: "1"
 *               fiImagen:
 *                 type: string
 *                 format: binary
 *                 description: Imagen de la máquina
 *               fiTecnica:
 *                 type: string
 *                 format: binary
 *                 description: Documento técnico de la máquina
 *     responses:
 *       200:
 *         description: Ficha técnica registrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Mensaje:
 *                   type: string
 *                   example: "Ficha técnica registrada exitosamente"
 *                 FichaTecnicaID:
 *                   type: integer
 *                   example: 1234
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * ficha/listar:
 *   get:
 *     summary: Listar ficha técnica de los equipos
 *     tags:
 *       - Ficha Técnica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               variblesFicha:
 *                 type: array
 *                 description: Lista de variables para la ficha técnica
 *                 items:
 *                   type: object
 *                   properties:
 *                     idFichas:
 *                       type: integer
 *                       example: 1
 *                     fi_placa_sena:
 *                       type: string
 *                       example: "3002SE"
 *                     fi_estado:
 *                       type: enum
 *                       example: "operacion"
 *                     sit_nombre:
 *                       type: string
 *                       example: "Ambiente y14"
 *                     fi_serial:
 *                       type: string
 *                       example: "3RR03"
 *                     fi_marca:
 *                       type: string
 *                       example: "DELL"
 *                     fi_modelo:
 *                       type: string
 *                       example: "3003"
 *               tipoFicha:
 *                 type: string
 *                 description: ID del tipo de ficha técnica
 *                 example: "2"
 *     responses:
 *       200:
 *         description: Variables de ficha técnica registradas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Mensaje:
 *                   type: string
 *                   example: "Variables registradas exitosamente"
 *                 FichaTecnicaID:
 *                   type: integer
 *                   example: 1234
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * ficha/listar:
 *   get:
 *     summary: Listar ficha técnica de los equipos
 *     tags:
 *       - Ficha Técnica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               variblesFicha:
 *                 type: array
 *                 description: Lista de variables para la ficha técnica
 *                 items:
 *                   type: object
 *                   properties:
 *                     idFichas:
 *                       type: integer
 *                       example: 1
 *                     fi_placa_sena:
 *                       type: string
 *                       example: "3002SE"
 *                     fi_estado:
 *                       type: enum
 *                       example: "operacion"
 *                     sit_nombre:
 *                       type: string
 *                       example: "Ambiente y14"
 *                     fi_serial:
 *                       type: string
 *                       example: "3RR03"
 *                     fi_marca:
 *                       type: string
 *                       example: "DELL"
 *                     fi_modelo:
 *                       type: string
 *                       example: "3003"
 *               tipoFicha:
 *                 type: string
 *                 description: ID del tipo de ficha técnica
 *                 example: "2"
 *     responses:
 *       200:
 *         description: Variables de ficha técnica registradas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Mensaje:
 *                   type: string
 *                   example: "Variables registradas exitosamente"
 *                 FichaTecnicaID:
 *                   type: integer
 *                   example: 1234
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error del servidor
 */
/**
 * @swagger
 * /maquina/fichaTecnica/registrarVariables:
 *   post:
 *     summary: Registra variables para una ficha técnica de una máquina
 *     tags:
 *       - Ficha Técnica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               variblesFicha:
 *                 type: array
 *                 description: Lista de variables para la ficha técnica
 *                 items:
 *                   type: object
 *                   properties:
 *                     var_nombre:
 *                       type: string
 *                       description: Nombre de la variable
 *                       example: "RAM3"
 *                     var_descripcion:
 *                       type: string
 *                       description: Descripción de la variable
 *                       example: "Ram del equipo"
 *                     var_clase:
 *                       type: string
 *                       description: Clase o categoría de la variable
 *                       example: "especificacionesTecnicas"
 *                     var_tipoDato:
 *                       type: string
 *                       description: Tipo de dato de la variable
 *                       example: "text"
 *               tipoFicha:
 *                 type: string
 *                 description: ID del tipo de ficha técnica
 *                 example: "2"
 *     responses:
 *       200:
 *         description: Variables de ficha técnica registradas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Mensaje:
 *                   type: string
 *                   example: "Variables registradas exitosamente"
 *                 FichaTecnicaID:
 *                   type: integer
 *                   example: 1234
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error del servidor
 */
/**
 * @swagger
 * /detalles/registrar:
 *   post:
 *     summary: Registrar detalles de una ficha técnica
    *     tags:
 *       - Ficha Técnica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               detalles:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     detFkFicha:
 *                       type: integer
 *                       example: 3
 *                     detFkVariable:
 *                       type: integer
 *                       example: 1
 *                     detValor:
 *                       type: string
 *                       example: "2023-08-08"
 *     responses:
 *       200:
 *         description: Detalles registrados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Detalles registrados exitosamente"
 *       400:
 *         description: Error en el registro de los detalles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Datos inválidos o faltantes"
 */
/**
 * @swagger
 * /maquina/fichaTecnica/registrarVariables:
 *   post:
 *     summary: Registra variables para una ficha técnica de una máquina
 *     tags:
 *       - Ficha Técnica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               variblesFicha:
 *                 type: array
 *                 description: Lista de variables para la ficha técnica
 *                 items:
 *                   type: object
 *                   properties:
 *                     var_nombre:
 *                       type: string
 *                       description: Nombre de la variable
 *                       example: "RAM3"
 *                     var_descripcion:
 *                       type: string
 *                       description: Descripción de la variable
 *                       example: "Ram del equipo"
 *                     var_clase:
 *                       type: string
 *                       description: Clase o categoría de la variable
 *                       example: "especificacionesTecnicas"
 *                     var_tipoDato:
 *                       type: string
 *                       description: Tipo de dato de la variable
 *                       example: "text"
 *               tipoFicha:
 *                 type: string
 *                 description: ID del tipo de ficha técnica
 *                 example: "2"
 *     responses:
 *       200:
 *         description: Variables de ficha técnica registradas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Mensaje:
 *                   type: string
 *                   example: "Variables registradas exitosamente"
 *                 FichaTecnicaID:
 *                   type: integer
 *                   example: 1234
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error del servidor
 */
/**
 * @swagger
 * /solicitud/registrar:
 *   post:
 *     summary: Creación de solicitudes
 *     tags:
 *       - Solicitudes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prioridad:
 *                 type: string
 *                 example: "Alta"
 *               descripcion:
 *                 type: string
 *                 example: "Descripción de la solicitud"
 *               costo_estimado:
 *                 type: string
 *                 example: "1000"
 *               obsevaciones:
 *                 type: string
 *                 example: "Observaciones adicionales"
 *               temaLegal:
 *                 type: string
 *                 example: "Cumple con la ley"
 *               nombre_solicitante:
 *                 type: string
 *                 example: "Juan Perez"
 *               correo_solicitante:
 *                 type: string
 *                 example: "juanperez@example.com"
 *     responses:
 *       201:
 *         description: Solicitud creada exitosamente
 */

/**
 * @swagger
 * /solicitud/equipos:
 *   post:
 *     summary: Tabla intermedia entre equipos y solicitudes
 *     tags:
 *       - Solicitudes
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fk_solicitud:
 *                 type: string
 *                 example: "1"
 *               fk_ficha:
 *                 type: string
 *                 example: "1"
 *     responses:
 *       201:
 *         description: Relación creada exitosamente
 */
/**
 * @swagger
 * /solicitudes/{idSolicitud}:
 *   put:
 *     summary: Actualizar una solicitud de mantenimiento
 *     description: Actualiza los detalles de una solicitud de mantenimiento según el ID de la solicitud.
 *     tags:
 *       - Solicitudes
 *     parameters:
 *       - name: idSolicitud
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la solicitud de mantenimiento a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prioridad:
 *                 type: string
 *                 description: Nivel de prioridad de la solicitud
 *                 example: "Alta"
 *               descripcion:
 *                 type: string
 *                 description: Descripción del problema
 *                 example: "Falla en el sistema eléctrico"
 *               costo_estimado:
 *                 type: number
 *                 description: Costo estimado para la reparación
 *                 example: 1500
 *               obsevaciones:
 *                 type: string
 *                 description: Observaciones adicionales
 *                 example: "El equipo necesita revisión mensual"
 *               estado:
 *                 type: string
 *                 description: Estado de la solicitud
 *                 example: "En progreso"
 *               temaLegal:
 *                 type: string
 *                 description: Temas legales asociados a la solicitud
 *                 example: "Sin temas legales"
 *               nombre_solicitante:
 *                 type: string
 *                 description: Nombre del solicitante
 *                 example: "Juan Pérez"
 *               correo_solicitante:
 *                 type: string
 *                 description: Correo del solicitante
 *                 example: "juan.perez@example.com"
 *     responses:
 *       200:
 *         description: Solicitud actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Se actualizó correctamente la solicitud"
 *       400:
 *         description: Error en la validación de los datos enviados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: array
 *                   items:
 *                     type: string
 *                     example: "El campo 'prioridad' es obligatorio"
 *       404:
 *         description: No se encontró la solicitud con el ID proporcionado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Error al actualizar solicitud"
 *       500:
 *         description: Error interno del servidor al actualizar la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Error del servidor"
 */

/**
 * @swagger
 * /actividades/registrar:
 *   post:
 *     summary: Registrar varias actividades
 *     description: Registra múltiples actividades en la base de datos en una única transacción. Si alguna actividad falla, se revierte la transacción.
 *     tags:
 *       - Actividades
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 acti_nombre:
 *                   type: string
 *                   description: Nombre de la actividad
 *                   example: "Revisión de maquinaria"
 *                 acti_descripcion:
 *                   type: string
 *                   description: Descripción de la actividad
 *                   example: "Revisión periódica de la maquinaria industrial"
 *                 acti_fecha_realizacion:
 *                   type: string
 *                   format: date
 *                   description: Fecha de realización de la actividad
 *                   example: "2024-09-01"
 *                 acti_estado:
 *                   type: string
 *                   description: Estado de la actividad. El valor por defecto es 'en ejecucion'.
 *                   example: "completada"
 *                 acti_fk_solicitud:
 *                   type: integer
 *                   description: ID de la solicitud relacionada con la actividad
 *                   example: 10
 *     responses:
 *       200:
 *         description: Actividades registradas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Se registraron correctamente las actividades"
 *       400:
 *         description: Error en la validación de los datos de entrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         example: "El nombre de la actividad es requerido"
 *                       param:
 *                         type: string
 *                         example: "acti_nombre"
 *                       location:
 *                         type: string
 *                         example: "body"
 *       500:
 *         description: Error en el servidor al registrar las actividades.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error en el servidor: Error al registrar una o más actividades"
 */

/**
 * @swagger
 * /ficha/listarPorAmbiente/1:
 *   get:
 *     summary: Listar fichas técnicas de los equipos por su ubicación. 
 *     tags:
 *       - Ficha Técnica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               detalles:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idFichas:
 *                       type: integer
 *                       example: 1
 *                     fi_placa_sena:
 *                       type: string
 *                       example: "3002SE"
 *                     fi_imagen:
 *                       type: string
 *                       example: "Captura de pantalla.png"
 *                     fi_estado:
 *                       type: enum
 *                       example: "operacion"
 *                     ti_fi_nombre:
 *                       type: string
 *                       example: "Ficha tecnica PC del 303"
 *                     fi_serial:
 *                       type: string
 *                       example: "3RR03"
 *                     fi_modelo:
 *                       type: string
 *                       example: "3003"
 *     responses:
 *       200:
 *         description: fichas listadas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Detalles registrados exitosamente"
 *       400:
 *         description: Error en el registro de los detalles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Datos inválidos o faltantes"
 */
/**
 * @swagger
 * /mantenimiento/listar:
 *   get:
 *     summary: Listar información e historial de mantenimiento del equipo seleccionado.
 *     tags:
 *       - Mantenimiento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               detalles:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idMantenimiento:
 *                       type: integer
 *                       example: 1
 *                     referencia_maquina:
 *                       type: string
 *                       example: "3002SE"
 *                     codigo_mantenimiento:
 *                       type: string
 *                       example: "12345"
 *                     descripcion_mantenimiento:
 *                       type: string
 *                       example: "nada"
 *                     fecha_realizacion:
 *                       type: date
 *                       example: "23/8/2024"
 *                     estado_maquina:
 *                       type: string
 *                       example: "en ejecucion"
 *                     idActividades:
 *                       type: integer
 *                       example: 1
 *                     acti_nombre:
 *                       type: string
 *                       example: "cambio de ram"
 *                     tipo_mantenimiento:
 *                       type: string
 *                       example: "correctivo"
 *                     idFichas:
 *                       type: integer
 *                       example: 1
 *                     estado_ficha:
 *                       type: string
 *                       example: "operacion"
 *     responses:
 *       200:
 *         description: mantenimientos listados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Detalles registrados exitosamente"
 *       400:
 *         description: Error en el registro de los detalles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Datos inválidos o faltantes"
 */
/**
 * @swagger
 * /partes/registrar:
 *   post:
 *     summary: Registrar partes de mantenimiento
 *     description: Registra múltiples partes de mantenimiento asociadas a un mantenimiento específico.
 *     tags:
 *       - Partes de Mantenimiento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 par_fk_mantenimientos:
 *                   type: integer
 *                   description: ID del mantenimiento al que está asociada la parte
 *                   example: 5
 *                 par_nombre_repuesto:
 *                   type: string
 *                   description: Nombre del repuesto o parte del mantenimiento
 *                   example: "Filtro de aceite"
 *                 par_costo:
 *                   type: number
 *                   format: float
 *                   description: Costo de la parte
 *                   example: 150.50
 *     responses:
 *       200:
 *         description: Partes de mantenimiento registradas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Se registraron las partes de mantenimiento con éxito"
 *       400:
 *         description: Error en la solicitud, por ejemplo, si el cuerpo no es un array o está vacío.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Se esperaba un array de partes de mantenimiento."
 *       404:
 *         description: No se registraron correctamente las partes de mantenimiento.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "No se registraron las partes de mantenimiento con éxito"
 *       500:
 *         description: Error interno del servidor al registrar las partes de mantenimiento.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Error: Error al registrar las partes de mantenimiento"
 */

/**
 * @swagger
 * /roles/registrar:
 *   post:
 *     summary: Registrar un nuevo rol
 *     description: Crea un nuevo rol en el sistema con un nombre y una descripción.
 *     tags:
 *       - Roles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del rol
 *                 example: "Administrador"
 *               descripcion:
 *                 type: string
 *                 description: Descripción del rol
 *                 example: "Tiene acceso a todas las funciones del sistema"
 *     responses:
 *       200:
 *         description: Rol registrado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Rol Registrado con exito"
 *       400:
 *         description: Error de validación en los datos enviados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: {
 *                     "errors": [
 *                       { "msg": "El campo nombre es obligatorio" }
 *                     ]
 *                   }
 *       404:
 *         description: Error al registrar el rol o datos faltantes.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Mensaje:
 *                   type: string
 *                   example: "Usuario no registrado"
 *       500:
 *         description: Error interno del servidor al registrar el rol.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Mensaje:
 *                   type: string
 *                   example: "Error del servidor"
 */
