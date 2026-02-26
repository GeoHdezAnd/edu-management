import colors from "colors";
import { prisma } from "../lib/prisma.ts";

export async function runSeeds() {
  console.log(colors.yellow("Ejecutando seeds..."));

  try {
    // Tipos de persona
    const personTypes = [
      { name: "ALUMNO", description: "Estudiante de la institución" },
      { name: "DOCENTE", description: "Profesor" },
      { name: "DIRECTOR", description: "Director escolar" },
      { name: "ADMINISTRATIVO", description: "Personal administrativo" },
      { name: "CONTACTO_EMERGENCIA", description: "Contacto de emergencia de alumno" },
    ];

    for (const type of personTypes) {
      await prisma.personType.upsert({
        where: { name: type.name },
        update: {},
        create: type,
      });
    }

    // Tipos de empleado
    const employeeTypes = [
      { name: "DOCENTE", description: "Profesor de asignatura" },
      { name: "DIRECTOR", description: "Director del plantel" },
      { name: "ADMINISTRATIVO", description: "Personal administrativo" },
    ];

    for (const type of employeeTypes) {
      await prisma.employeeType.upsert({
        where: { name: type.name },
        update: {},
        create: type,
      });
    }
    console.log(colors.green("Seeds ejecutados correctamente"));
  } catch (error) {
    console.log(error);
  }
}
