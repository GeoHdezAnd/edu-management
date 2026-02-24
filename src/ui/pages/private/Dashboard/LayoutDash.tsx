import SideBarApp from "@/components/attoms/SideBarApp/SideBarApp";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

function LayoutDash() {
  return (
    <SidebarProvider className="max-h-dvw">
      <SideBarApp />
      <main className="w-full h-dvh">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default LayoutDash;
