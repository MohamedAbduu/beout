// import React, { useEffect, useState } from 'react';

// const TravelInfo = () => {
//   const [allCountries, setAllCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]); // Updated initial state to an empty array
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [error, setError] = useState(null);

//   const API_KEY = 'RXlHa2FHbWs3NjJSVmt5WDI4Nkd2dng5bUlnbkdqV0kxeFFCaTdTeA==';
//   const requestOptions = {
//     method: 'GET',
//     headers: {
//       'X-CSCAPI-KEY': API_KEY,
//     },
//     redirect: 'follow',
//   };

//   const fetchCountryData = async () => {
//     try {
//       const response = await fetch('https://api.countrystatecity.in/v1/countries', requestOptions);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const result = await response.json();
//       setAllCountries(result);
//       setFilteredCountries(result);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchCountryData();
//   }, []);

//   const fetchCountryDetails = async (countryCode) => {
//     try {
//       const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}`, requestOptions);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const result = await response.json();
//       setSelectedCountry(result);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleSearch = () => {
//     if (searchTerm === '') {
//       setFilteredCountries(allCountries); // Show all countries if search field is empty
//     } else {
//       const filteredData = allCountries.filter((country) =>
//         country.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredCountries(filteredData);
//     }
//     setSelectedCountry(null);
//   };

//   const handleCountryClick = (country) => {
//     fetchCountryDetails(country.iso2);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="mt-16 mb-8">
//         <input
//           type="text"
//           placeholder="Search for a country"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border p-2"
//         />
//         <button onClick={handleSearch} className="bg-gray-500 text-white p-2 ml-2">
//           Search
//         </button>
//       </div>
//       {error ? (
//         <p className="text-red-500">Error: {error}</p>
//       ) : selectedCountry ? (
//         <div className="border p-4 bg-white">
//           <h2 className="text-2xl font-semibold mb-2">{selectedCountry.name}</h2>
//           {/* Display country details */}
//           {/* ... */}
//           <button
//             onClick={() => setSelectedCountry(null)}
//             className="bg-gray-500 text-white p-2 mt-4"
//           >
//             Back to List
//           </button>
//         </div>
//       ) : (
//         <ul>
//           {filteredCountries.length > 0 ? (
//             filteredCountries.map((country) => (
//               <li
//                 key={country.id}
//                 onClick={() => handleCountryClick(country)}
//                 className="cursor-pointer border p-2 m-2 bg-white"
//               >
//                 {country.name}
//               </li>
//             ))
//           ) : (
//             <li className="text-gray-500">No matching countries found.</li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TravelInfo;
