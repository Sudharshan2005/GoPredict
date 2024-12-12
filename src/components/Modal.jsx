import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { SimpleRegistrationForm } from "./SignUp";
import { SimpleRegistrationFormSignIn } from "./SignIn";
 
export function DialogDefault() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} variant="outlined">
        Login
      </Button>
      <Dialog className="bg-blue-gray-900 text-white" open={open} handler={handleOpen}>
        <DialogBody className="">
          <SimpleRegistrationFormSignIn />
        </DialogBody>
      </Dialog>
    </>
  );
}
