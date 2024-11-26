import Link from "next/link";



export default function dashboard (){
    return(
    
    <>
    <h1 className="text-center mx-auto p-14 text-3xl">dashboard page</h1>
    <div className="flex justify-center gap-6  items-center">

    <Link href={'/dashboard/setting'}>
    <button className="bg-purple-400 text-white px-4 py-2 rounded-lg hover:bg-purple-500">setting</button>
    </Link>
    <Link href={'/dashboard/profile'}>
    <button className="bg-purple-400 text-white px-4 py-2 rounded-lg hover:bg-purple-500">profile</button>
    </Link>
    </div>

    </>
    
    )
    
    }