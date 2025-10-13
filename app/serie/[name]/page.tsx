"use client"

import Link from "next/link";
import styles from "@/components/content.module.css"
import { ActorInterface, MediaInterface } from "@/lib/interfaces";
import React, { useEffect, useState } from 'react';
import { fetchMediaByUrl, fetchActorByName } from "@/lib/utils";
import ActorList from "@/components/actor-list";

const SeriesPage: React.FC<{ params: { name: string } }> = ({ params }) => {
  const [media, setMedia] = useState<MediaInterface | null>(null);
  const [actors, setActors] = useState<ActorInterface[]>([]);
  const [mediaName, setMediaName] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const resolvedParams = await params; // Await the params Promise
      setMediaName(resolvedParams.name); // Set the media name

      const fetchedMedia = await fetchMediaByUrl(resolvedParams.name);
      setMedia(fetchedMedia);

      if (fetchedMedia) {
        const actorNames = fetchedMedia.actors.map(actor => actor.name); // Get actor names from the series
        const fetchedActor = await fetchActorByName(actorNames);
        setActors(fetchedActor);
      }
    };

    loadData();
  }, [mediaName]);

  if (!media) {
    return <div className="absolute bottom-40 left-40">Loading actors...</div>; // Loading state
  }

    return (
      <div className="absolute left-30">
        <div className={styles.content}>
           <div>
                <h1>{media.title}</h1>
                <p>{media.desc}</p>

                <div className={styles.details}>
                    {media.directors.map((director) => (
                        <h5 key={director.name}>{director.name}</h5>
                    ))}
                    <h6>{media.studio}</h6>
                    <h5>{media.type}</h5>
                    <h4>{media.date}</h4>
                    <h3><span>IMDb</span><i className="bi bi-star-fill"></i>{media.rate}</h3>
                </div>

                <div className={styles.btns}>
                    <Link href="#" hidden>Pause <i className="bi bi-pause-fill"></i></Link>
                    <Link href="#" hidden>Torrent <i className="bi bi-cloud-arrow-down-fill"></i></Link>
                </div>
            </div>
        </div>
        <ActorList actors={actors} />
      </div>
    )
}

export default SeriesPage;