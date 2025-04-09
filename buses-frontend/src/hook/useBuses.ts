import { useState, useEffect } from 'react';
import { fetchBuses } from '../service/busService';

const useBuses = (initialPage: number = 0, initialSize: number = 5) => {
  const [buses, setBuses] = useState<any[]>([]);
  const [page, setPage] = useState(initialPage);
  const [size, setSize] = useState(initialSize);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadBuses = async () => {
      try {
        const data = await fetchBuses(page, size);
        setBuses(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error al obtener los buses:', error);
      }
    };

    loadBuses();
  }, [page, size]);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(Number(e.target.value));
    setPage(0);
  };

  return {
    buses,
    page,
    size,
    totalPages,
    setPage,
    handlePageSizeChange,
  };
};

export default useBuses;
