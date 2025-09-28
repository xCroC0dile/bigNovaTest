import React, { use, useEffect } from 'react'
import Cardbox from './Cardbox'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext' 

const Stats = () => {
  const income = 5000; 
 useEffect(() => {
    fetchReferrals();
  }, []);
  const {totalReferrals, fetchReferrals} = useContext(AppContext);
  var revenue = totalReferrals * income;
  return (
    <>
    <h1>Montant</h1>
    <Cardbox props={revenue} props2="DZD" />
    </>
    
  )
}

export default Stats