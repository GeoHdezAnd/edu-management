import { Button } from "@/components/ui/button";
import { Users, Calendar, User, MapPin } from "lucide-react";
import AddGroup from "./components/AddGroup";
import Header from "@/components/Header";

const GROUPS_TEMPLATE = [
  {
    name: "6° C",
    year: "2024",
    tutor: "Joaquin Lopez",
    description: "Grupo de sexto grado orientación en ciencias",
    studentsCount: 28,
    classroom: "Aula 12",
  },
  {
    name: "5° A",
    year: "2024",
    tutor: "María González",
    description: "Quinto grado con orientación en matemáticas",
    studentsCount: 32,
    classroom: "Aula 8",
  },
  {
    name: "4° B",
    year: "2024",
    tutor: "Carlos Rodríguez",
    description: "Cuarto grado - Turno mañana",
    studentsCount: 25,
    classroom: "Aula 15",
  },
  {
    name: "3° D",
    year: "2024",
    tutor: "Ana Martínez",
    description: "Tercer grado con taller de arte",
    studentsCount: 30,
    classroom: "Taller de arte",
  },
  {
    name: "2° C",
    year: "2024",
    tutor: "Roberto Sánchez",
    description: "Segundo grado - Ciclo básico",
    studentsCount: 27,
    classroom: "Aula 5",
  },
];

function Groups() {
  return (
    <div className="min-h-dvh  p-6 bg-gray-50">
      {/* Header */}
      <Header
        title="Grupos de clase"
        subtitle="Administra y organiza los grupos de clase de manera eficiente"
      />

      {/* Action Bar */}
      <div className="flex justify-end mb-6">
        <AddGroup />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GROUPS_TEMPLATE.map((group, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            <div className="p-6">
              {/* Title and Year */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{group.name}</h2>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>Año lectivo {group.year}</span>
                  </div>
                </div>
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {group.studentsCount} estudiantes
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{group.description}</p>

              {/* Details Grid */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">
                    <span className="font-medium">Tutor:</span> {group.tutor}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">
                    <span className="font-medium">Salón:</span> {group.classroom}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">
                    <span className="font-medium">Capacidad:</span> {group.studentsCount}/35
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Ocupación</span>
                  <span>{Math.round((group.studentsCount / 35) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${(group.studentsCount / 35) * 100}%` }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2 border-t border-gray-100">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-gray-600 hover:text-gray-900"
                >
                  Ver detalles
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-gray-600 hover:text-gray-900"
                >
                  Editar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="mt-8 p-4 bg-white rounded-lg border border-gray-100">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>Total de grupos: {GROUPS_TEMPLATE.length}</span>
          <span>
            Total estudiantes: {GROUPS_TEMPLATE.reduce((acc, g) => acc + g.studentsCount, 0)}
          </span>
          <span>
            Promedio por grupo:{" "}
            {Math.round(
              GROUPS_TEMPLATE.reduce((acc, g) => acc + g.studentsCount, 0) / GROUPS_TEMPLATE.length,
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Groups;
