import axios from 'axios';
import path from 'path';

const token = '874cffb1ff48abb84ea5888f3dc73d6c7f33b57d';
const historyFilePath = path.join(process.cwd(), 'src', 'data', 'history.json');

// Helper function to predict AQI and PM values for the next 3 days
const predictFutureAQI = (currentAQI) => {
  const futureAQI = [];
  const today = new Date();

  for (let i = 1; i <= 3; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i);

    // Create random predictions with variability
    const predictedAQI = Math.max(0, Math.floor(currentAQI.aqi + (Math.random() - 0.5) * 20)); // Wider range
    const predictedPM25 = Math.max(0, Math.floor(currentAQI.pm25 + (Math.random() - 0.5) * 15)); // Wider range
    const predictedPM10 = Math.max(0, Math.floor(currentAQI.pm10 + (Math.random() - 0.5) * 15)); // Wider range

    futureAQI.push({
      date: futureDate.toISOString().split('T')[0],
      aqi: predictedAQI,
      pm25: predictedPM25,
      pm10: predictedPM10,
      dominantPol: currentAQI.dominantPol,
    });
  }

  return futureAQI;
};

// Fetch AQI data and predict future AQI and PM values
export const getAQIData = async (city) => {
  try {
    const response = await axios.get(`https://api.waqi.info/feed/${city}/?token=${token}`);
    
    if (response.data && response.data.status === 'ok' && response.data.data) {
      const currentAQI = {
        date: new Date().toISOString().split('T')[0],
        aqi: response.data.data.aqi,
        pm25: response.data.data.iaqi.pm25?.v || 0,
        pm10: response.data.data.iaqi.pm10?.v || 0,
        dominantPol: response.data.data.dominentpol || 'N/A', // Fallback to 'N/A' if not available
      };

      // Introduce variability in predictions
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
