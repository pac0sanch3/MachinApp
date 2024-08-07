import { FormFichaDeMantenimiento } from "../../components/organisms/formularios/FormFichaDeMante";
import Layout from "../../components/template/Layout";

export const ViewFormFicha_De_mantenimiento = () => {
  return (
    <Layout titlePage={"Ficha de mantenimiento"}>
      <FormFichaDeMantenimiento />
    </Layout>
  );
};

export default ViewFormFicha_De_mantenimiento;