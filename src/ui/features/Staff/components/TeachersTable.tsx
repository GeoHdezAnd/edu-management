import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddTeacher from "./AddTeacher";

const TeachersTable = () => {
  return (
    <div className="m-5">
      {/**Acciones */}
      <div className="flex justify-end">
        <AddTeacher />
      </div>

      {/**Tabla de datos */}
      <Table>
        <TableCaption>Tabla de maestros</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Télefono</TableHead>
            <TableHead>Correo</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Hello</TableCell>
            <TableCell>Hello</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TeachersTable;
