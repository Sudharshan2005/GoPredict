import React from 'react';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@material-tailwind/react";

export function OpenDrawer({ onClose, prediction }) {
  return (
    <Drawer open={true} onClose={onClose}>
      <DrawerContent>
        <DrawerHeader className='sm:text-center'>
          <DrawerTitle>Match Prediction</DrawerTitle>
          <DrawerDescription className='text-lg'>
            {prediction ? `${prediction}` : "Fetching prediction..."}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className='flex flex-col justify-center items-center'>
            <Button className='h-8 w-15 flex flex-col justify-center items-center' variant="outline" onClick={onClose}>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
