import History from "../components/History";
import { World } from "../components/World";
import { fetchHistory } from "../helpers/historyFetch";
import { fetchAll } from "../helpers/worldWide";

export const Dashboard = () => {

  return (
    <>


    <div className="fixed inset-0 flex flex-col md:flex-row p-4 md:p-8 gap-4">
      <div className="w-full md:w-1/2 flex flex-col gap-4">

        <div className="flex-1 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <h2 className="text-lg font-semibold mb-2">Caja 1</h2>
          <p className="text-gray-600">Contenido de la primera caja</p>
        </div>

        <div className="flex-1 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <h2 className="text-lg font-semibold mb-2">Caja 2</h2>
          <p className="text-gray-600">Contenido de la segunda caja</p>
        </div>

      </div>

      <div className="w-full md:w-1/2 flex-1 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Caja Principal</h2>
        <p className="text-gray-600">
          Información principal con separación de los bordes y altura corregida.
        </p>
      </div>
      
    </div>



    </>
  )
}

