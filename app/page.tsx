import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Description } from "@radix-ui/react-toast"
import {
  Building2,
  Users,
  FileCheck,
  Briefcase,
  Target,
  TrendingUp,
  HeartPulse,
  UtensilsCrossed,
  Wheat,
  Cpu,
  HardHat,
  Truck,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Icon,
  Globe,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800">
          <img
            src="/professional-corporate-office-building-european-ci.jpg"
            alt="Corporate background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Elwain Europa
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 mb-8 text-balance">
            Your Partner in Precision Global Sourcing
          </p>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            International manpower solutions delivering compliant, job-ready workforce across Europe and global markets.
          </p>
          <Button size="lg" className="text-base sm:text-lg px-8 py-6 bg-slate-50 text-slate-900 hover:bg-slate-200">
            Let's Work Together
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">About Us</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
                <p>
                  Elwain Europa is a trusted international manpower solutions company, delivering end-to-end workforce recruitment, training, and placement services across Europe and global markets. With a strong operational framework similar to Binawan Group, Elwain Europa is designed to support corporations, institutions, and government-linked entities in fulfilling their workforce needs with qualified, job-ready, and compliant talent.
                </p>
                <p>
                  We work as a long-term strategic partner, not merely a recruitment vendor, ensuring workforce continuity, quality assurance, and regulatory compliance at every stage.
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96">
              <img
                src="/professional-business-team-meeting-modern-office.jpg"
                alt="About Elwain Europa"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">What We Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Users,
                title: "International Recruitment & Placement",
                description:
                  "Sourcing, screening, and overseas deployment aligned with client requirements and host-country regulations.",
              },
              {
                icon: Target,
                title: "Workforce Training & Job Readiness",
                description: "Pre-deployment preparation to reduce onboarding time and operational risk.",
              },
              {
                icon: FileCheck,
                title: "Regulatory & Compliance Management",
                description: "Full handling of cross-border employment complexity.",
              },
              {
                icon: Briefcase,
                title: "Customized Manpower Solutions",
                description: "Scalable workforce solutions aligned with client operational goals.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Industries We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, label: "Private Corporations" },
              { icon: HeartPulse, label: "Hospitals & Healthcare Providers" },
              { icon: UtensilsCrossed, label: "Hospitality Groups & Hotel Chains" },
              { icon: HardHat, label: "Manufacturing & Industrial Companies" },
              { icon: HardHat, label: "Construction Firms & Contractors" },
              { icon: Truck, label: "Logistics & Service Companies" },
            ].map((industry, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <industry.icon className="w-10 h-10 text-primary flex-shrink-0" />
                  <p className="font-semibold text-foreground text-sm sm:text-base">{industry.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sectors Section
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">Our Sectors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {[
              { icon: HeartPulse, label: "Healthcare" },
              { icon: UtensilsCrossed, label: "Hospitality & Aviation" },
              { icon: Wheat, label: "Agriculture" },
              { icon: Cpu, label: "Information Technology" },
              { icon: HardHat, label: "Engineering, Construction & Manufacture" },
              { icon: Truck, label: "Transportation & Logistics" },
            ].map((sector, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <sector.icon className="w-12 h-12 sm:w-14 sm:h-14 mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-foreground text-sm sm:text-base">{sector.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Ethical Recruitment Section
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Commitment to Ethical Recruitment</h2>
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
            Elwain Europa is committed to responsible and ethical recruitment practices. We prioritize transparency,
            fair processes, and respect for both clients and candidates, ensuring sustainable workforce solutions that
            meet international standards.
          </p>
        </div>
      </section> */}

      {/* Why Partner Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Why Partner With Elwain Europa
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: Globe,
                title: "Business-Oriented Approach",
                description: "We speak the language of business. Our recruitment model is designed to support productivity, workforce stability, and long-term performance.",
              },
              {
                icon: TrendingUp,
                title: "Quality-Driven Talent Supply",
                description: "Candidates are selected through a structured screening and assessment process to ensure skill alignment and job readiness.",
              },
              {
                icon: FileCheck,
                title: "Risk Mitigation & Compliance",
                description: "We minimize legal, operational, and reputational risks by prioritizing compliance, transparency, and ethical recruitment practices.",
              },
              {
                icon: Briefcase,
                title: "Scalable & Reliable Operations",
                description: "Whether you require a small team or large workforce deployment, Elwain Europa has the operational capability to scale efficiently."
              },
              {
                icon: Briefcase,
                title: "Long-Term Partnership Mindset",
                description: "Our success is measured by the success of our clients. We aim to build sustainable partnerships, not transactional engagements."
              },
              {
                icon: Briefcase,
                title: "Commitment to Ethical Recruitment",
                description: "We prioritize transparency, fair processes, and respect for both clients and candidates. "
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Model Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 sm:mb-20 text-center text-foreground">
            Our Working Model
          </h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16">
              {[
                { step: "01", title: "Client Needs Assessment", description:"Understanding your manpower requirements, operational challenges, and timeline.", position: "right" },
                { step: "02", title: "Talent Sourcing & Screening", description:"Recruitment, assessment, and selection based on agreed criteria.", position: "left" },
                { step: "03", title: "Training & Preparation", description:"Ensuring candidates are fully job-ready and compliant.", position: "right" },
                { step: "04", title: "Deployment & Placement", description:"Coordinated deployment aligned with client schedules.", position: "left" },
                { step: "05", title: "Post-Placement Support", description:"Ongoing coordination to ensure workforce stability and performance.", position: "right" },
              ].map((phase, index) => (
                <div key={index} className="relative">
                  {/* Center Square */}
                  <div className="absolute left-1/2 top-0 w-4 h-4 bg-primary border-4 border-background -translate-x-1/2 rotate-45 z-10" />

                  {/* Content */}
                  <div
                    className={`grid grid-cols-2 gap-8 sm:gap-12 items-start ${phase.position === "left" ? "" : ""}`}
                  >
                    {phase.position === "right" ? (
                      <>
                        {/* Empty Left Side */}
                        <div />
                        {/* Content Right Side */}
                        <div className="pt-0">
                          <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <span className="inline-block text-3xl sm:text-4xl font-bold text-primary mb-3">
                              {phase.step}
                            </span>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">{phase.title}</h3>
                            <p className="text-muted-foreground mt-2">{phase.description}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Content Left Side */}
                        <div className="pt-0 text-right">
                          <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <span className="inline-block text-3xl sm:text-4xl font-bold text-primary mb-3">
                              {phase.step}
                            </span>
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">{phase.title}</h3>
                            <p className="text-muted-foreground mt-2">{phase.description}</p>
                          </div>
                        </div>
                        {/* Empty Right Side */}
                        <div />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">Let's Work Together</h2>
          <p className="text-lg sm:text-xl text-slate-200 mb-12 text-center leading-relaxed">
            For business inquiries, collaboration opportunities, or manpower requests, please contact our corporate
            team.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="w-10 h-10 mb-4 text-slate-200" />
                <p className="font-semibold mb-2 text-slate-200">Office Phone</p>
                <a
                  href="tel:+4372422520050"
                  className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  +43 7242 252050
                </a>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="w-10 h-10 mb-4 text-slate-200" />
                <p className="font-semibold mb-2 text-slate-200">Mobile Phone</p>
                <a
                  href="tel:+436641618555"
                  className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  +43 664 1618 555
                </a>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Mail className="w-10 h-10 mb-4 text-slate-200" />
                <p className="font-semibold mb-2 text-slate-200">Email</p>
                <a
                  href="mailto:sylvia@elwain.com"
                  className="text-slate-300 hover:text-white transition-colors break-all text-sm sm:text-base"
                >
                  sylvia@elwain.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-semibold text-white mb-2 text-lg sm:text-xl">Elwain Europa GmbH</p>
              <p className="text-sm sm:text-base flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Jägerweg 4, 4600 Thalheim bei Wels, Austria</span>
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Location">
                <MapPin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Elwain Europa GmbH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
