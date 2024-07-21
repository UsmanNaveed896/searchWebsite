import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useGetAdHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [carAd, setGetCarAd] = useState();
  const [propertAds, setPropertyAds] = useState();
  const [furnitureAds,setFurnitureAds]=useState()
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmY0YWYxMzA1OGJmYTk0MGNiYWY5NiIsImlhdCI6MTcyMTMzNTQwMCwiZXhwIjoxNzI5MTExNDAwfQ.fqnPTpH2fLMypFKY1E2HV6c3wazJJsHKj9tJn79Hw98";

  const getCarAds = async () => {
    setLoading(true);
    // let headers={
    //     Authorization: "Bearer " + token
    // }
    try {
      const response = await axios.get(
        `https://searchapi.codematesolution.com/api/v1/carAdvertisements`
      );
      setGetCarAd(response?.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const getPropertyAds = async () => {
    setLoading(true);
    let headers = {
      Authorization: "Bearer " + token,
    };
    try {
      const response = await axios.get(
        `https://searchapi.codematesolution.com/api/v1/postAdvertisements`,
        { headers }
      );
      setPropertyAds(response?.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const getFurnitureAds = async () => {
    setLoading(true);
    let headers = {
      Authorization: "Bearer " + token,
    };
    try {
      const response = await axios.get(
        `https://searchapi.codematesolution.com/api/v1/furnitureAdvertisements`,
        { headers }
      );
      setFurnitureAds(response?.data?.data);
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
    carAd,
    propertAds,
    getPropertyAds,
    getFurnitureAds,
    furnitureAds
  };
};
