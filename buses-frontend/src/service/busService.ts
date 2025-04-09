const BASE_URL = 'http://localhost:8080/bus';
const authToken = localStorage.getItem('authToken');

async function fetchBuses(page: number, size: number) {

    if (!authToken) {
      throw new Error('Usuario no autorizado.');
    }
  
    try {
      const response = await fetch(`${BASE_URL}?page=${page}&size=${size}`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${authToken}`,
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error!!! estado: ${response.status}`);
      }

      if (response.status === 401) {
        throw new Error('Usuario no autorizado.');
        return response.status;
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error al obtener los buses:', error);
      throw error;
    }
  }

  
async function fetchBusById(id: number) {

    if (!authToken) {
      throw new Error('Usuario no autorizado.');
    }
  
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${authToken}`,
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error!!! estado: ${response.status}`);
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error al obtener los buses:', error);
      throw error;
    }
  }

export { fetchBuses, fetchBusById };
  