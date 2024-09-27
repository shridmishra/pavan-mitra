
"use client";

import { getAQIData } from '../../../lib/getAQIData';
import React from 'react';
import AQIDataDisplay from '../../../components/AQIDataDisplay';

const ChennaiPage = async () => {
  const { currentAQI, futureAQI } = await getAQIData('kanpur');

  return <AQIDataDisplay currentAQI={currentAQI} futureAQI={futureAQI} city="Kanpur" />;
};

export default ChennaiPage;
