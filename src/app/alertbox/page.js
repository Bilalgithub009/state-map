import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Link from "next/link"
  
export default function(){
return(
<>
<div className="flex justify-center items-center p-10 ">
<AlertDialog>
  <AlertDialogTrigger>Open and click</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <Link href={'/'}>
      <AlertDialogAction>Continue</AlertDialogAction>
      </Link>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
</div>


</>


)

}