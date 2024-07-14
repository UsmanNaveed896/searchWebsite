import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useGetAdHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [carAd, setGetCarAd] = useState();
  // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmY0YWYxMzA1OGJmYTk0MGNiYWY5NiIsImlhdCI6MTcyMDUxMDg4NCwiZXhwIjoxNzI4Mjg2ODg0fQ.ZmLqcNYN1xe0_2_O5tYX7y6YD1PMLYKa-Bg1YvDP2CU";

  const getCarAds = async () => {
    setLoading(true);
    // let headers={
    //     Authorization: "Bearer " + token 
    // }
    try {
      const response = await axios.get(`https://searchapi.codematesolution.com/api/v1/carAdvertisements`, );
      setGetCarAd(response?.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    getCarAds,
    carAd
  };
};
