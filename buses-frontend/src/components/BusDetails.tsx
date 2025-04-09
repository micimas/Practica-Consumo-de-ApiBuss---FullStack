import useBusDetails from '../hook/useBusDetails';
import '../styles/BusDetails.css';

interface BusDetailsProps {
    busId: number;
    onClose: () => void;
}

const BusDetails = ({ busId, onClose }: BusDetailsProps) => {

    const { bus } = useBusDetails(busId);

    if (!bus) {
        return
        <p>Error al cargar los datos</p>
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Detalles del Bus</h2>
                <p><strong>ID:</strong> {bus.id}</p>
                <p><strong>Numero de Bus:</strong> {bus.numeroBus}</p>
                <p><strong>Placa:</strong> {bus.placa}</p>
                <p><strong>Fecha de Creación:</strong> {new Date(bus.fechaCreacion).toLocaleString()}</p>
                <p><strong>Características:</strong> {bus.caracteristicas}</p>
                <p><strong>Marca:</strong> {bus.marca.nombre}</p>
                <p><strong>Estado:</strong> {bus.activo ? "Activo" : "No activo"}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default BusDetails;
