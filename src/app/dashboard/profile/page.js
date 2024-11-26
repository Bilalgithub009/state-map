import Link from "next/link"


export default function profile (){
    return(
    
    <>
    <h1 className="text-center mx-auto p-14 text-3xl">profile page</h1>
    <div className="flex justify-center gap-6  items-center">

    {/* <button className="bg-purple-400 text-white rounded">setting</button> */}
    <Link href={'/'}>
    <button className="">back home page</button>
    </Link>
    </div>

    </>
    
    )
    
    }