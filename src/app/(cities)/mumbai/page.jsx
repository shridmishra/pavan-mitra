// app/mumbai/page.js
"use client";

import { getAQIData } from '../../../lib/getAQIData';
import React from 'react';
import AQIDataDisplay from '../../../components/AQIDataDisplay';

const MumbaiPage = async () => {
  const { currentAQI, futureAQI } = await getAQIData('mumbai');

  return <AQIDataDisplay currentAQI={currentAQI} futureAQI={futureAQI} city="Mumbai" />;
};

export default MumbaiPage;
