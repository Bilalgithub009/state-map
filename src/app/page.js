import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>

    <h1 className="text-3xl mx-auto text-center  ">hello world</h1>
    <div className="flex flex-col ">

    <div className="mx-auto m-10 ">

    <Link href={'/dashboard'}>
    {/* <button className="mx-auto flex justify-content-center p font-bold text-2xl">see dashboard</button> */}
    <Button>see dashboard</Button>
    </Link>
    
    </div>
    </div>
    </>
  );
}
