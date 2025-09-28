import React, { use, useEffect } from 'react'
import Cardbox from './Cardbox'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext' 

const Stats = () => {
 useEffect(() => {
    fetchReferrals();
  }, []);
  const {totalReferrals, fetchReferrals} = useContext(AppContext);
  return (
    <Cardbox props={totalReferrals} />
    
  )
}

export default Stats