import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  "Över 15 års erfarenhet inom vård och tandvård",
  "Certifierade tekniker och specialister",
  "Snabba insatstider och tillgänglighet",
  "Långsiktiga partnerskap med våra kunder",
  "Kvalitetssäkring enligt ISO-standarder",
  "Omfattande produktportfölj och kompetens",
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560306990-18fa759c8713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGhvc3BpdGFsfGVufDF8fHx8MTc2MzQ1MjY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern vårdmiljö"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-8 rounded-xl shadow-lg hidden lg:block max-w-xs">
              <div className="text-white/90">Kundnöjdhet</div>
              <div className="mt-2">98%</div>
              <div className="text-white/90 mt-1">Av våra kunder rekommenderar oss</div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div>
              <span className="text-blue-600">Om ServiceWell</span>
              <h2 className="mt-4 text-gray-900">
                Din pålitliga partner inom vård och tandvård
              </h2>
            </div>
            <p className="text-gray-600">
              ServiceWell är en ledande leverantör av tjänster och produkter till vård- och 
              tandvårdssektorn. Vi har byggt vår verksamhet på kvalitet, tillförlitlighet 
              och nära samarbete med våra kunder.
            </p>
            <p className="text-gray-600">
              Vårt team består av erfarna tekniker och specialister som brinner för att 
              leverera bästa möjliga service. Vi förstår vikten av att er utrustning 
              fungerar felfritt och att ni kan fokusera på det viktigaste – att ge 
              vårdtagare den bästa möjliga vården.
            </p>

            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}