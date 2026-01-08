import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600">Kontakta oss</span>
          <h2 className="mt-4 text-gray-900">
            Låt oss prata om era behov
          </h2>
          <p className="mt-4 text-gray-600">
            Hör av er så berättar vi mer om hur vi kan hjälpa er verksamhet. 
            Vi svarar alltid snabbt och kommer gärna på besök.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Namn *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ditt namn"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-700 mb-2">
                        Företag/Organisation *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Företagsnamn"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        E-post *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="kontakt@servicewell.se"
                      />
                    </div>
                    {/* <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        Telefon
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="070-123 45 67"
                      />
                    </div> */}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Meddelande *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Berätta om era behov och hur vi kan hjälpa er..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Skicka meddelande <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">112</p>
                    <p className="text-gray-500 mt-1">Mån-Fre 08:00-17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">E-post</h3>
                    <p className="text-gray-600">kontakt@servicewell.se</p>
                    <p className="text-gray-500 mt-1">Vi svarar inom 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Besöksadress</h3>
                    <p className="text-gray-600">
                      Grönegatan 1C
                      <br />
                      222 24 Lund
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
