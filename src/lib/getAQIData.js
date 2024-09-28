import axios from 'axios';
import path from 'path';

const token = '874cffb1ff48abb84ea5888f3dc73d6c7f33b57d';
const historyFilePath = path.join(process.cwd(), 'src', 'data', 'history.json');

// Helper function to predict AQI for the next 3 days
const predictFutureAQI = (currentAQI) => {
  const futureAQI = [];
  const today = new Date();

  for (let i = 1; i <= 3; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i);

    // Create random predictions with more variability
    const predictedAQI = Math.max(0, Math.floor(currentAQI.aqi + (Math.random() - 0.5) * 20)); // Wider range

    futureAQI.push({
      date: futureDate.toISOString().split('T')[0],
      aqi: predictedAQI,
      dominantPol: currentAQI.dominantPol, // Keep dominant pollutant info
    });
  }

  return futureAQI;
};

// Fetch AQI data and predict future AQI for the next 3 days
export const getAQIData = async (city) => {
  try {
    // Fetch the current AQI data from the API
    const response = await axios.get(`https://api.waqi.info/feed/${city}/?token=${token}`);
    
    if (response.data && response.data.status === 'ok' && response.data.data) {
      // Current AQI data
      const currentAQI = {
        date: new Date().toISOString().split('T')[0],
        aqi: response.data.data.aqi,
        dominantPol: response.data.data.dominentpol || 'N/A', // Fallback to 'N/A' if not available
      };

      // Predict future AQI values for the next 3 days
      const futureAQI = predictFutureAQI(currentAQI);

      return { currentAQI, futureAQI };
    } else {
      console.error(`Error: Invalid data received for ${city}`);
      return { currentAQI: null, futureAQI: [] };
    }
  } catch (error) {
    console.error(`Error fetching AQI for ${city}:`, error.message);
    return { currentAQI: null, futureAQI: [] };
  }
};
