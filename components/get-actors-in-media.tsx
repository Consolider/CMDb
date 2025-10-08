"use client"
// src/app/parentComponent.tsx
import React, { useEffect, useState } from 'react';
// import CardActor from './card-actor';
// import { MediaInterface } from '@/lib/interfaces';

// const ParentComponent: React.FC = () => {
//   const [namesToFilter, setNamesToFilter] = useState<string[]>([]); // State to hold the filtered names
  
//   useEffect(() => {
//     const fetchNames = async () => {
//       const response = await fetch('/movies.json'); // Fetch the data JSON file
//       // const allData: MediaInterface[] = await response.json(); // Parse the JSON data

//       // Extract actor names from the data
//       // const allNames = allData.flatMap(item => item.actors.map(actor => actor.name));

//       // Condition to filter names (for example, names that start with 'R' or 'J')
//       //const filteredNames = allNames.filter(name => name.startsWith('R') || name.startsWith('S'));
//       // const filteredNames = allNames;
//       // setNamesToFilter(filteredNames); // Set the filtered names
//     };

//     fetchNames();
//   }, []); // Empty dependency array to run once on mount

//   return (
//     <div>
//       <h1>Dynamic Name Filtering</h1>
//       {namesToFilter.length > 0 ? (
//         // <CardActor namesToFilter={namesToFilter} /> // Pass the filtered names as a prop
//         // <CardActor namesToFilter={namesToFilter} /> // Pass the filtered names as a prop
//       ) : (
//         <p>Loading names...</p> // Show loading message while fetching
//       )}
//     </div>
//   );
// };

// export default ParentComponent;
