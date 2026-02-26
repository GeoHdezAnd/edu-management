import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

// Generar años (últimos 5 años + próximos 2)
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 8 }, (_, i) => currentYear - 7 + i);

const AddGroup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Agrega grupo
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Agrega un grupo nuevo</DialogTitle>
          <p className="font-light text-sm text-gray-500">
            Organiza tu salón de clases creando un nuevo grupo. Completa los siguientes campos para
            comenzar
          </p>
        </DialogHeader>
        <form>
          <FieldGroup className="mt-4">
            <Field>
              <Label htmlFor="name">Nombre del grupo</Label>
              <Input id="name" name="name" placeholder="e.j 3° A" />
            </Field>

            <Field>
              <Label htmlFor="year">Año académico</Label>
              <Select>
                <SelectTrigger id="year">
                  <SelectValue placeholder="Selecciona un año" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <Label htmlFor="teacher">Profesor a cargo</Label>
              <Input id="teacher" name="teacher" placeholder="Nombre del profesor" />
            </Field>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddGroup;
