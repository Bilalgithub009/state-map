import Link from "next/link";



export default function setting (){
    return(
    
    <>
    <h1 className="text-center mx-auto p-14 text-3xl">setting page</h1>
    <div className="flex justify-center gap-6  items-center">
    <Link href={'/'}>
    <button className="">back home page</button>
    </Link>
    </div>

    </>
    
    )
    
    }