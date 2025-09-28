import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();
  const serverUrl = "http://localhost:4000";
  const [referrals, setReferrals] = useState([]);
  const totalReferrals = referrals.length;


const fetchReferrals = async () => {
  try {
    const { data } = await axios.get(`${serverUrl}/api/referral/get`, {
        headers: {
        token: token,
      },
    });
    if (data.success) {
      setReferrals(data.referrals);
    }
  } catch (err) {
    console.error(err);
    toast.error("Erreur lors du chargement des referrals");
  }
};


  const value = {
    token,
    setToken,
    navigate,
    serverUrl,
    fetchReferrals
    ,referrals,
    totalReferrals
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
