import { useState } from 'react';
import Pagination from './Pagination';
import BusDetails from './BusDetails';
import useBuses from '../hook/useBuses';

const BusTable = () => {
    const [selectedBusId, setSelectedBusId] = useState<number | null>(null);

    const {
        buses,
        page,
        size,
        totalPages,
        setPage,
        handlePageSizeChange,
    } = useBuses();

    const handleViewDetails = (busId: number) => {
        setSelectedBusId(busId);
    };

    const handleCloseModal = () => {
        setSelectedBusId(null);
    };

    return (
        <div>
            <h2>Lista de Buses</h2>
            <div>
                <label>Registros</label>
                <select onChange={handlePageSizeChange} value={size}>
                    <option value={5}>5</option>
                    <option value={7}>7</option>
                    <option value={10}>10</option>
                    <option value={30}>30</option>
                </select>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Numero de Bus</th>
                        <th>Placa</th>
                        <th>Caracteristicas</th>
                        <th>Marca</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {buses.map((bus) => (
                        <tr key={bus.id}>
                            <td>{bus.numeroBus}</td>
                            <td>{bus.placa}</td>
                            <td>{bus.caracteristicas}</td>
                            <td>{bus.marca.nombre}</td>
                            <td>{bus.activo ? "Activo" : "No activo"}</td>
                            <td>
                                <button onClick={() => handleViewDetails(bus.id)}>Ver</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination
                currentPage={page}
                onPageChange={setPage}
                totalPages={totalPages}
            />
            
            {/* modal */}
            {selectedBusId && (
                <BusDetails busId={selectedBusId} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default BusTable;
