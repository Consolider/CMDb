import data from "@/public/movies.json"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {data.map((project) => (
        <Link key={project.id} href={`/${project.url}`}>
          <h3>{project.title}</h3>
        </Link>
      ))}
    </main>
  )
}