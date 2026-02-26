import SideBarApp from "@/components/SideBarApp";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

function LayoutDash() {
  return (
    <SidebarProvider className="">
      <SideBarApp />
      <main className="w-full min-h-dvh relative">
        <div>
          <Outlet />
        </div>
        <SidebarTrigger className="absolute top-0 cursor-pointer" />
      </main>
    </SidebarProvider>
  );
}

export default LayoutDash;
