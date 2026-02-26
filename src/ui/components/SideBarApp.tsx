import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "./ui/sidebar";
import { Users, GraduationCap, BookOpen, Calendar, Settings } from "lucide-react";
import { NavLink } from "react-router";

const NAVIGATION_ITEMS = {
  studentManagement: {
    label: "Gestión alumnado",
    items: [
      { label: "Grupos", href: "/groups", icon: Users },
      { label: "Matrículas", href: "/enrollments", icon: GraduationCap },
      { label: "Cursos", href: "/courses", icon: BookOpen },
    ],
  },
  academicManagement: {
    label: "Gestión académica",
    items: [
      { label: "Personal", href: "/staff", icon: Users },
      { label: "Calendario", href: "/calendar", icon: Calendar },
    ],
  },
  configuration: {
    label: "Configuración",
    items: [{ label: "Ajustes", href: "/settings", icon: Settings }],
  },
};

function SideBarApp() {
  return (
    <Sidebar className="">
      <SidebarHeader className="m-auto text-center">
        <img src="./icon-edu.png" loading="lazy" className="w-40" />
        <span className="font-semibold text-sm">Edu management</span>
      </SidebarHeader>

      <SidebarContent>
        {Object.values(NAVIGATION_ITEMS).map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent className="px-2">
              <nav className="flex flex-col gap-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "hover:bg-gray-100 text-gray-700"
                        }`
                      }
                    >
                      <Icon
                        className={`w-4 h-4 ${({ isActive }: { isActive: boolean }) => (isActive ? "text-blue-600" : "text-gray-500")}`}
                      />
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </nav>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}

export default SideBarApp;
