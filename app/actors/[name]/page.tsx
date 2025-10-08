"use client"

// import data from "@/public/actors.json"
import Link from "next/link";
import styles from "@/components/content.module.css"
import { ActorInterface, MediaInterface } from "@/lib/interfaces";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import { fetchMediaByUrl, fetchActorByName, fetchActorByUrl } from "@/lib/utils";
import MediaList from "@/components/media-list";

// SERVER
// export default async function ActorPage({
//   params,
// }: {
//   params: Promise<{ name: string[] }> // CANNOT BE ANYTHING OTHER THAN name!! Is it because of folder name [name]??
// }) {
export default function ActorPage() {
  const params = useParams<{ name: string[] }>()
  
  const [actor, setActor] = useState<ActorInterface[]>()
  const [media, setMedia] = useState<MediaInterface>()

  useEffect(() => {
    // For content
    const loadData = async () => {
      const fetchedActor = await fetchActorByUrl(params.name);
      setActor(fetchedActor);
    }
    loadData()
  }, [actor])

  // console.log(actor)

  return (
    <div className="absolute left-30">
      {actor?.map((actor, index) => (
      <div key={index} className={styles.content}>
        <div>
          <h1>{actor.title}</h1>
          {/* <p>{params.name}</p> */}
          <p>{actor.desc}</p>

          <div className={styles.details}>
            <h5>{actor.type}</h5>
            <h4>{actor.date}</h4>
          </div>
          
        </div>
      </div>
      ))}
      {/* <MediaList media={media} /> */}
    </div>
  )
}