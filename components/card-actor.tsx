"use client"
// src/app/page.tsx
import Link from "next/link"
import Image from "next/image"
import styles from "./card-actor.module.css"
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
// import { filterAndMapData } from "@/lib/utils";
import React, { useEffect, useState } from "react";
// import { CardActorProps } from "@/lib/interfaces";

// const CardActor: React.FC<CardActorProps> = ({namesToFilter}) => {
//   const [filteredData, setFilteredData] = useState<Array<{ name: string }>>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//     // const namesToFilter: string[] = ["Christian Slater", "Rami Malek"]; // Dynamic names to filter
//     const data = await filterAndMapData(namesToFilter); // Use the prop for filtering
//     console.log("Fetched Data:", data); // Log the fetched data
//     setFilteredData(data);
//     };

//     fetchData();
//   }, [namesToFilter]); // Add namesToFilter as a dependency

//   return (
//     <section className={styles.section}>
//             <h4>Actors</h4>
//             <ChevronLeftCircle size={20} className={styles.bi_chevron_left} />
//             <ChevronRightCircle size={20} className={styles.bi_chevron_right} />
//             <div className={styles.cards}>
                
//                 {filteredData.map((person, index) => (
//                     <Link
//                         key={index}
//                         className={styles.card}
//                         href={link.url}
//                     >
//                     <Image
//                         loading="eager"
//                         className={styles.poster}
//                         src={link.fposter}
//                         alt={`${link.title} poster`}
//                         width={100}
//                         height={195}
//                     />
//                     <div className={styles.rest_card}>
//                         <Image
//                             loading="eager"
//                             src={link.bposter}
//                             alt={`${link.title} cover`}
//                             width={300}
//                             height={180}
//                         />
//                         <div className={styles.cont}>
//                             {/* <h4>{link.title}</h4> */}
//                             <h4>{actor.name}</h4>
//                             <div className={styles.sub}>
//                                 <p>{link.type}, {link.date}</p>
//                                 <h3><span>IMDb</span><i></i> {link.rate}</h3>
//                             </div>
//                         </div>
//                     </div>
//                     </Link>
//                 ))}
//             </div>
//         </section> 
//     // <div>
//     //   <h1>Actors</h1>
//     //   <ul>
//     //     {filteredData.map((person, index) => (
//     //       <li key={index}>
//     //         {person.title}
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>
//   );
// };

// export default CardActor;

