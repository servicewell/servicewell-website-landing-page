import { Database, Network, FileCode, Lock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const standards = [
  {
    icon: FileCode,
    name: "FHIR",
    description: "Fast Healthcare Interoperability Resources för modern datautbyte inom vården",
  },
  {
    icon: Network,
    name: "HL7",
    description: "Health Level Seven standarder för kommunikation mellan vårdssystem",
  },
  {
    icon: Database,
    name: "SNOMED CT",
    description: "Systematized Nomenclature of Medicine för medicinsk terminologi",
  },
  {
    icon: Lock,
    name: "IHE",
    description: "Integrating the Healthcare Enterprise för säker och effektiv integration",
  },
];

export function TechnicalStandards() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600">Tekniska standarder</span>
          <h2 className="mt-4 text-gray-900">
            Vi arbetar med branschens ledande standarder
          </h2>
          <p className="mt-4 text-gray-600">
            För att säkerställa interoperabilitet, säkerhet och effektivitet arbetar vi med 
            etablerade internationella standarder inom hälso-IT.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {standards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{standard.name}</h3>
                  <p className="text-gray-600">{standard.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-gray-900 mb-4">
                Expertis inom systemintegration
              </h3>
              <p className="text-gray-700">
                Med djup kunskap inom dessa standarder hjälper vi er att integrera och 
                optimera era vårdssystem för smidig datautbyte och effektiva arbetsflöden.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-blue-600 mb-1">ISO 27001</div>
                <div className="text-gray-600">Säkerhet</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-blue-600 mb-1">GDPR</div>
                <div className="text-gray-600">Dataskydd</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-blue-600 mb-1">ISO 13485</div>
                <div className="text-gray-600">Medicinteknisk</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-blue-600 mb-1">ISO 9001</div>
                <div className="text-gray-600">Kvalitet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
