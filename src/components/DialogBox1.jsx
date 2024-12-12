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


export function Dialogbox1() {
    const navigate = useNavigate()
    return (
        <>
            <div>
            <AlertDialog>
                <AlertDialogTrigger className='font-bold'>Open</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>You are Predicting Winner...</AlertDialogTitle>
                    <AlertDialogDescription>
                    Do you want to predict the winner <span className="font-bold">before</span> the match or after the <span className="font-bold">first innings</span>?
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogAction onClick={() => navigate('prediction-form1')}>Before</AlertDialogAction>
                    <AlertDialogAction onClick={() => navigate('prediction-form2')}>After Inn.</AlertDialogAction>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            </div>
        </>
    )
}