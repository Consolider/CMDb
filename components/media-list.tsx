// This file should render Media Cards for Actors/Directors (props/param)

import React from 'react';
import Link from "next/link"
import Image from "next/image"
// import { MediaInterface } from '@/lib/interfaces';
import styles from "./card-actor.module.css"
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

interface MediaListProps {
//   medias: MediaInterface[];
}

// const MediaList: React.FC<MediaListProps> = ({ medias }) => {

//   return (
//     <section className={styles.section}>
//         <h4>Starring in:</h4>
//             <ChevronLeftCircle size={20} className={styles.bi_chevron_left} />
//             <ChevronRightCircle size={20} className={styles.bi_chevron_right} />
//             <div className={styles.cards}>
//                 {medias.map((media, index) => (
//                     <Link
//                         key={index}
//                         className={styles.card}
//                         href={`${media.type.toLowerCase()}s/${media.url}`}
//                     >
//                         <Image
//                         loading="eager"
//                         className={styles.poster}
//                         src={media.fposter}
//                         alt={`${media.title} poster`}
//                         width={2000}
//                         height={3000}
//                     />
//                     <div className={styles.rest_card}>
//                         <Image
//                             loading="eager"
//                             src={media.bposter}
//                             alt={`${media.title} cover`}
//                             width={5000}
//                             height={3000}
//                         />
//                         <div className={styles.cont}>
//                             <h4>{media.title}</h4>
//                             <div className={styles.sub}>
//                                 <p>{media.type}, {media.date}</p>
//                                 <h3><span>IMDb</span><i></i> {media.rate}</h3>
//                             </div>
//                         </div>
//                     </div>
//                     </Link>
//             ))}
//         </div>
//     </section> 
//   );
// };

// export default MediaList;
