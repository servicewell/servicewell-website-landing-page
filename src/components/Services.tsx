import { Stethoscope, Users, Wrench, HeadphonesIcon, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Stethoscope,
    title: "Medicinteknisk utrustning",
    description: "Service och underhåll av medicinsk utrustning för vård och tandvård. Vi säkerställer att er utrustning fungerar optimalt.",
  },
  {
    icon: Wrench,
    title: "Systemintegration",
    description: "Integration av vårdssystem med FHIR, HL7 och andra standarder för smidig datautbyte mellan olika plattformar.",
  },
  {
    icon: Users,
    title: "Utbildning & Support",
    description: "Omfattande utbildning av er personal för säker och effektiv användning av utrustning och system.",
  },
  {
    icon: HeadphonesIcon,
    title: "Teknisk Support",
    description: "Support och teknisk hjälp när ni behöver det. Vår expertis finns tillgänglig för att lösa era utmaningar snabbt.",
  },
  {
    icon: Shield,
    title: "Kvalitetssäkring",
    description: "Systematisk kontroll och dokumentation enligt gällande regelverk och standarder för säker drift.",
  },
  {
    icon: TrendingUp,
    title: "IT-konsulttjänster",
    description: "Experthjälp inom hälso-IT, datautbyte och implementering av SNOMED CT, FHIR och andra standarder.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600">Våra tjänster</span>
          <h2 className="mt-4 text-gray-900">
            Kompletta lösningar för vården
          </h2>
          <p className="mt-4 text-gray-600">
            Vi erbjuder ett brett utbud av tjänster som stödjer er verksamhet och säkerställer 
            högsta kvalitet i er vård- och tandvårdsverksamhet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}