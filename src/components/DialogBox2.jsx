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
  import { useNavigate } from "react-router-dom";

export function Dialogbox2() {
    const navigate = useNavigate()
    return (
        <>
            <div>
            <AlertDialog>
                <AlertDialogTrigger className='font-bold'>Open</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>You are Predicting Score...</AlertDialogTitle>
                    <AlertDialogDescription>
                    Do you want to predict the score of <span className="font-bold">first innings</span> or the <span className="font-bold">second innings</span>?
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogAction onClick={() => navigate('prediction-form3')}>First Inn.</AlertDialogAction>
                    <AlertDialogAction onClick={() => navigate('prediction-form4')}>Second Inn.</AlertDialogAction>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            </div>
        </>
    )
}