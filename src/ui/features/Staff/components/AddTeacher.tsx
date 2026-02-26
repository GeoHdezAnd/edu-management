import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

const AddTeacher = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="cursor-pointer bg-blue-600" type="button">
          <Plus className="w-4 h-4 mr-2" />
          Agrega maestro
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Agrega un maestro nuevo</DialogTitle>
          <p className="font-light text-sm text-gray-500">
            Completa el formulario para agregar el maestro
          </p>
        </DialogHeader>
        <form>
          <FieldGroup>
            <Field>
              <Label htmlFor="nombre">Nombre (s)</Label>
              <Input placeholder="e.j. Jose Luis" />
            </Field>
            <Field>
              <Label htmlFor="apellido">Apellidos</Label>
              <Input placeholder="e.j. Pérez Cervantes" />
            </Field>
            <Field>
              <Label htmlFor="apellido">Télefono</Label>
              <Input maxLength={10} placeholder="e.j. 2221231442" />
            </Field>
            <Field>
              <Label htmlFor="apellido">Especialidad</Label>
              <Input placeholder="e.j. Fisico Matematico" />
            </Field>
          </FieldGroup>

          <div className="flex justify-end gap-10 mt-6">
            <DialogClose>
              <Button className="cursor-pointer" variant="outline" type="button">
                Cancelar
              </Button>
            </DialogClose>

            <Button className="cursor-pointer">Agregar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTeacher;
