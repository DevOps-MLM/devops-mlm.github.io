import axios from "axios";

const ApiService = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL

  const get = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/notes`
      );
      
      return response;
    } catch (error) {
      console.error("Error fetching mynotes:", error);
      throw error;
    }
  };

  const store = async (formData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/notes`,
        formData
      );
      return response;
    } catch (error) {
      console.error("Error adding:", error);
      throw error;
    }
  };

  const update = async (id, formData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/notes/${id}`,
        formData
      );
      return response;
    } catch (error) {
      console.error("Error updating:", error);
      throw error;
    }
  };

  const destroy = async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/notes/${id}`
      );
      if (response.status === 401) {
        return response;
      }
      return response;
    } catch (error) {
      console.error("Error deleting:", error);
      throw error;
    }
  };

  return {
    get,
    store,
    update,
    destroy
  };
};

export default ApiService;
