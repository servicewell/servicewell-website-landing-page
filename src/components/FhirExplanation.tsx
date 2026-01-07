import { CheckCircle2, ArrowRight, FileText, Network, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const benefits = [
  "Standardized data exchange between different healthcare systems and vendors",
  "Reduced integration costs and faster time-to-market for new applications",
  "Improved interoperability enabling better patient care coordination",
];

export function FhirExplanation() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">What is FHIR?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              FHIR (Fast Healthcare Interoperability Resources) is the modern standard for
              exchanging healthcare information electronically. It's designed to enable seamless
              data sharing between different systems, applications, and organizations.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h3 className="text-center text-gray-900 mb-8">
              Benefits for Healthcare Providers & Vendors
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How FHIR Works */}
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-center text-gray-900 mb-12">
              How FHIR Works
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              {/* Step 1: Patient Data */}
              <Card className="bg-white shadow-md w-full md:w-48">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="text-gray-900 mb-2">Patient Data</div>
                  <div className="text-gray-600">EMS Systems</div>
                </CardContent>
              </Card>

              {/* Arrow */}
              <ArrowRight className="w-8 h-8 text-gray-400 hidden md:block" />
              <div className="w-8 h-8 rotate-90 md:hidden">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Step 2: FHIR API */}
              <Card className="bg-blue-600 shadow-lg w-full md:w-48">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Network className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-white mb-2">FHIR API</div>
                  <div className="text-blue-100">Service Well</div>
                </CardContent>
              </Card>

              {/* Arrow */}
              <ArrowRight className="w-8 h-8 text-gray-400 hidden md:block" />
              <div className="w-8 h-8 rotate-90 md:hidden">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Step 3: Connected Systems */}
              <Card className="bg-white shadow-md w-full md:w-48">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="text-gray-900 mb-2">Connected Systems</div>
                  <div className="text-gray-600">Labs, Apps, Vendors</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
