import {
  useGlobalData,
  ModalComponte,
  FormRol,
  FormUser,
  PaginateTable,
  DropDown,
  SearchComponent,
  Icons,
  V,
} from "../../../../index.js";

import { useNavigate } from "react-router-dom";

import { Button } from "@nextui-org/react";
import { useState } from "react";

export const ListarUsuarios = () => {
  const { dataUser, roles } = useGlobalData();
  const [data, setData] = useState(true);

  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  // definimos las columnas para la tabla
  const columns = [
    "Nombre",
    "Apellidos",
    "Correo",
    "Tipo de documento",
    "Numero de Documento",
    "Rol",
    "Acciones",
  ];

  // columnas para roles []
  const ColumnsRoles = ["id", "Rol", "Descripcion"];

  // definimos las filas: nota => hay que tener en cuanta que tanto las columnas y filas deben ser igual en numero
  // si envio 4 columnas debo tambien de enviarle 4 filas, de lo contrario nos arrojara un error
  const newArrayDataUser = dataUser.map((item) => ({
    nombre: item.us_nombre,
    apellidos: item.us_apellidos,
    correo: item.us_correo,
    tipo_documento: item.us_tipo_documento,
    numero_documento: item.us_numero_documento,
    rol: item.rol_nombre,
  }));

  const handleEdit = (id) => {
    const resultadoUsuario = dataUser.find(
      (persona) => persona.us_numero_documento === id
    );

    // Navega a la ruta deseada con la información del usuario
    navigate("/panelcontrol/user", { state: { resultadoUsuario } });
  };

  const handleDataUser = () => {
    setData(true);
  };

  const handleDataRol = () => {
    setData(false);
  };

  const handleSearchUsuario = (search) => {
    const filtered = newArrayDataUser.filter((usuario) => {
      return (
        usuario.numero_documento.toLowerCase().includes(search.toLowerCase()) ||
        usuario.nombre.toLowerCase().includes(search.toLowerCase()) ||
        usuario.correo.toLowerCase().includes(search.toLowerCase()) ||
        usuario.rol.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredData(filtered);
  };

  return (
    <>
      <div className="min-h-screen p-6 flex flex-col gap-8 ">
        {/* Contenedor de la tabla */}
        <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between p-4 items-center bg-gray-100 border-b space-y-4 md:space-y-0">
            <SearchComponent
              onSearch={handleSearchUsuario}
              className="w-full md:w-auto"
            />
            <div className="flex gap-2 flex-wrap justify-center md:justify-end w-full md:w-auto">
              <Button
                startContent={<Icons icon={V.UserGroupIcon} />}
                variant="bordered"
                color="success"
                onClick={handleDataUser}
                className="text-xs md:text-sm"
              >
                Usuarios
              </Button>
              <Button
                startContent={<Icons icon={V.ShieldCheckIcon} />}
                variant="bordered"
                color="success"
                onClick={handleDataRol}
                className="text-xs md:text-sm"
              >
                Roles
              </Button>
            </div>
            <ModalComponte
              buttonModal={"Añadir nuevo usuario"}
              componente={<FormUser />}
              tittleModal={"Registrando usuario"}
              size={""}
              className="w-full md:w-auto"
            />
          </div>

          {/* Tabla Paginada */}
          <div className="w-full overflow-x-auto">
            <span className="text-gray-600 text-sm md:text-base">
              {data ? (
                <>
                  <span className="flex">
                    <Icons icon={V.UserCircleIcon} /> Usuarios :
                    {" " + newArrayDataUser.length}
                  </span>
                </>
              ) : (
                `Total de roles en el sistema: ${roles.length}`
              )}
            </span>
            <div className="w-full min-w-max">
              <PaginateTable
                columns={data ? columns : ColumnsRoles}
                data={
                  data
                    ? filteredData.map((row) => ({
                        ...row,
                        acciones: (
                          <div className="">
                            <DropDown
                              DropdownTriggerElement={"..."}
                              dropdown={["Editar"]}
                              onClick={() => handleEdit(row.numero_documento)}
                            />
                          </div>
                        ),
                      }))
                    : roles
                }
                className="w-full table-auto"
              />
            </div>
          </div>
        </div>
        {!data && <FormRol />}
      </div>
    </>
  );
};
