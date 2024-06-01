
import { AllChat } from "@/app/components/notes/module/allChat";
import TemporaryDrawer from "./drawer-list/page";
import { Metadata, NextPage } from "next";

export const metadata:Metadata={
  title:"Turing Chat - Drawer",
}

const Drawerpage:NextPage=()=>{

  return (
    <>
    <span className="bg-slate-100 p-2 dark:bg-zinc-900">
    <TemporaryDrawer>
      <AllChat/>
    </TemporaryDrawer>
    </span>
    </>
  );
}
export default Drawerpage;