// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CitiesList = () => {
//   const [cities, setCities] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://nomad-list-cities.p.rapidapi.com/nomad-list/latin-america',
//         params: {
//           size: '20',
//           page: '1',
//           sort: 'desc',
//           sort_by: 'overall_score'
//         },
//         headers: {
//           'X-RapidAPI-Key': '85201cd4b7msh2bca92dbcac6f88p1d0b75jsn4dab6958e2c0',
//           'X-RapidAPI-Host': 'nomad-list-cities.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         setCities(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Cities in Latin America</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {cities.map((city, index) => (
//             <li key={index}>{city.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CitiesList;
