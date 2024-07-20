import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useGetVirtualOffices = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [virtualOffice, setVirtualOffice] = useState();
  // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmY0YWYxMzA1OGJmYTk0MGNiYWY5NiIsImlhdCI6MTcyMDUxMDg4NCwiZXhwIjoxNzI4Mjg2ODg0fQ.ZmLqcNYN1xe0_2_O5tYX7y6YD1PMLYKa-Bg1YvDP2CU";

  const handleGetVirtualOffices = async () => {
    setLoading(true);
    // let headers={
    //     Authorization: "Bearer " + token 
    // }
    try {
      const response = await axios.get(`https://searchapi.codematesolution.com/api/v1/virtualoffices`, );
      console.log(response,"response")
      setVirtualOffice(response?.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    virtualOffice,
    handleGetVirtualOffices
  };
};
