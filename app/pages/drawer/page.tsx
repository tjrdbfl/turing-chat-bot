import { AllChat } from "@/app/components/notes/service/allChat";
import TemporaryDrawer from "./drawer-list/page";
import { NextPage } from "next";

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