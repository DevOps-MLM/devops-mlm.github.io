import axios from "axios";

const ApiService = () => {
  const get = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts`
      );
      
      return response.data;
    } catch (error) {
      console.error("Error fetching mynotes:", error);
      throw error;
    }
  };

  const store = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        formData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding:", error);
      throw error;
    }
  };

  const update = async (id, formData) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/posts/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Error updating:", error);
      throw error;
    }
  };

  const destroy = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/posts/${id}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        },
      );
      if (response.status === 401) {
        return response;
      }
      return response.data;
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
