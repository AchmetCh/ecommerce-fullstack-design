const backendApi = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8000/api'          // Development API
  : 'https://ecombackend.myrender.eu/api'; // Production API

// Optional: Log which API is being used
console.log(`Using API: ${backendApi} (NODE_ENV: ${process.env.NODE_ENV})`);

export default backendApi;




