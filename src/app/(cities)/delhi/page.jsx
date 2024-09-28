// app/chennai/page.js
"use client";

import { getAQIData } from '../../../lib/getAQIData';
import React from 'react';
import AQIDataDisplay from '../../../components/AQIDataDisplay';

const ChennaiPage = async () => {
  const { currentAQI, futureAQI } = await getAQIData('delhi');

  return <AQIDataDisplay currentAQI={currentAQI} futureAQI={futureAQI} city="Delhi" />;
};

export default ChennaiPage;
