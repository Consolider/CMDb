import NavBar from "@/components/navbar";
import { Popular } from "@/lib/interfaces";
import { fetchPopular, fetchPopularNOTnull } from "@/lib/data/api-data";
import { imageURL } from "@/lib/utils";

// before:bg-[url(@/public/bg-1.jpg)]
// before:bg-[url(https://image.tmdb.org/t/p/original${popular.results[0].backdrop_path})]

const page_nr = 1

export default async function Header() {
    const popular: Popular | null = await fetchPopular(page_nr);

    return (
    popular !== null ?    
    <header
    
        className={`relative
        w-[90%]
        h-[90%]
        rounded-[20px]
        overflow-hidden
        shadow-[0_10px_25px_8px_rgba(0,0,0,0.25)]
        before:content-['']
        before:absolute
        before:w-[100%]
        before:h-[100%]        
        before:bg-[url(@/public/bg-1.jpg)]
        before:bg-center
        before:bg-no-repeat
        before:bg-cover
        before:opacity-[.6]
        before:z-[-1]
        after:content-['']
        after:absolute
        after:w-[100%]
        after:h-[100%]
        after:bg-linear-[180deg,transparent,black]
        after:z-[-1]
        `}>
        
        <NavBar />
        <div id="bg"></div>

    </header>
    :
    <header
    
        className={`relative
        w-[90%]
        h-[90%]
        rounded-[20px]
        overflow-hidden
        shadow-[0_10px_25px_8px_rgba(0,0,0,0.25)]
        before:content-['']
        before:absolute
        before:w-[100%]
        before:h-[100%]        
        before:bg-[url(@/public/bg-1.jpg)]
        before:bg-center
        before:bg-no-repeat
        before:bg-cover
        before:opacity-[.6]
        before:z-[-1]
        after:content-['']
        after:absolute
        after:w-[100%]
        after:h-[100%]
        after:bg-linear-[180deg,transparent,black]
        after:z-[-1]
        `}>
        
        <NavBar />
        <div id="bg"></div>

    </header>
    )
}