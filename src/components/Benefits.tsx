import { Clock, Award, ThumbsUp, PhoneCall } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Snabb respons",
    description: "Vi svarar snabbt på era förfrågningar och arbetar effektivt för att minimera störningar i er verksamhet.",
  },
  {
    icon: Award,
    title: "Hög kvalitet",
    description: "Alla våra tjänster utförs enligt branschens högsta standarder och med certifierad kompetens.",
  },
  {
    icon: ThumbsUp,
    title: "Nöjda kunder",
    description: "Över 98% av våra kunder är nöjda och väljer att fortsätta samarbeta med oss år efter år.",
  },
  {
    icon: PhoneCall,
    title: "Personlig service",
    description: "Vi tror på långsiktiga relationer och dedikerade kontaktpersoner som känner er verksamhet.",
  },
];

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white">
            Därför väljer vårdgivare ServiceWell
          </h2>
          <p className="mt-4 text-blue-100">
            Vi strävar efter att vara mer än en leverantör – vi vill vara er långsiktiga partner 
            som bidrar till er framgång.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
