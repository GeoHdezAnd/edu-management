import Header from "@/components/Header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TeachersTable from "./components/TeachersTable";

function Staff() {
  return (
    <div className="min-h-dvh p-6 bg-gray-50">
      <Header
        title="Personal de la escuela"
        subtitle="Administra el personal dentro de la escuela"
      />

      <Tabs defaultValue="teacher">
        <TabsList variant="line">
          <TabsTrigger value="teacher" className="cursor-pointer">
            Maestros
          </TabsTrigger>
          <TabsTrigger value="administrative" className="cursor-pointer">
            Administrativos
          </TabsTrigger>
          <TabsTrigger value="directive" className="cursor-pointer">
            Directivos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="teacher">
          <TeachersTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Staff;
