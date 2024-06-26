import { AllChat } from "@/app/containers/chat/AllChat";
import DrawerList from "./DrawerList";

const Drawer=()=>{
  return (
    <>
    <span className="bg-slate-100 p-2 dark:bg-zinc-900">
    <DrawerList>
      <AllChat/>
    </DrawerList>
    </span>
    </>
  );
}
export default Drawer;