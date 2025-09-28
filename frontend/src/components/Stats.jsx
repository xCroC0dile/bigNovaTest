import React, { useEffect, useContext } from 'react';
import Cardbox from './Cardbox';
import { AppContext } from '../context/AppContext';

const Stats = () => {
  const { totalReferrals, fetchReferrals } = useContext(AppContext);

  useEffect(() => {
    fetchReferrals();
  }, [fetchReferrals]);

  return <Cardbox props={totalReferrals} />;
};

export default Stats;