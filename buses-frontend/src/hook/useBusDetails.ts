import { useState, useEffect, useCallback } from 'react';
import { fetchBusById } from '../service/busService';

const useBusDetails = (busId: number) => {
  const [bus, setBus] = useState<any | null>(null);

  const getBusDetails = useCallback(async () => {
    try {
      const data = await fetchBusById(busId);
      setBus(data);
    } catch (error) {
      console.error('Error al obtener los detalles del bus:', error);
    }
  }, [busId]);

  useEffect(() => {
    getBusDetails();
  }, [busId, getBusDetails]);

  return { bus };
};

export default useBusDetails;
