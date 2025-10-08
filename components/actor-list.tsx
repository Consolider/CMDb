// This file renders Actor Cards on a movie/serie

import React from 'react';
import Link from "next/link"
import Image from "next/image"
// import { ActorInterface } from '@/lib/interfaces';
import styles from "./card-actor.module.css"
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

interface ActorListProps {
//   actors: ActorInterface[];
}

// const ActorList: React.FC<ActorListProps> = ({ actors }) => {

//   return (
//     <section className={styles.section}>
//         <h4>Actors</h4>
//         <ChevronLeftCircle size={20} className={styles.bi_chevron_left} />
//         <ChevronRightCircle size={20} className={styles.bi_chevron_right} />
//         <div className={styles.cards}>
            
//             {actors.map((actor, index) => (
//                 <Link
//                     key={index}
//                     className={styles.card}
//                     href={`../${actor.type.toLowerCase()}s/${actor.url}`}
//                 >
//                 <Image
//                     loading="eager"
//                     className={styles.poster}
//                     src={actor.fposter}
//                     alt={`${actor.title} poster`}
//                     width={2000}
//                     height={3000}
//                 />
//                 <div className={styles.rest_card}>
//                     <Image
//                         loading="eager"
//                         src={actor.bposter}
//                         alt={`${actor.title} cover`}
//                         width={5000}
//                         height={3000}
//                     />
//                     <div className={styles.cont}>
//                         <h4>{actor.title}</h4>
//                         <div className={styles.sub}>
//                             <p>{actor.date}</p>
//                             <h3><span>Movies</span><i></i> {actor.rate}<span>Series</span><i></i> {actor.rate}</h3>
//                         </div>
//                     </div>
//                 </div>
//                 </Link>
//             ))}
//         </div>
//     </section> 
//   );
// };

// export default ActorList;
