import Link from "next/link";
import Image from "next/image";

const useCaseDomains = [
  {
    icon: "/assets/images/custom-icons/surveying.svg",
    label: "Urban"
  },
  {
    icon: "/assets/images/custom-icons/construction.svg", 
    label: "Infrastructure"
  },
  {
    icon: "/assets/images/custom-icons/cultural-heritage.svg",
    label: "Heritage"
  },
  {
    icon: "/assets/images/custom-icons/architecture.svg",
    label: "Construction"
  },
  {
    icon: "/assets/images/custom-icons/construction.svg",
    label: "Industry"
  },
  {
    icon: "/assets/images/custom-icons/telecom.svg",
    label: "Security"
  }
];

const useCases = [
  {
    id: "architecture-bim",
    title: "Streamlined BIM Workflows",
    subtitle: "Design validation made simple",
    backgroundImage: "/assets/images/usecase/Bati.png", // Architecture/BIM
    client: {
      name: "Atelier Architectures",
      logo: "AA",
      location: "Lyon, France"
    },
    stats: [
      { value: "40%", label: "Faster validation" },
      { value: "95%", label: "Client satisfaction" },
      { value: "150+", label: "Projects delivered" }
    ]
  },
  {
    id: "construction-monitoring",
    title: "Real-Time Site Progress",
    subtitle: "Construction monitoring revolution",
    backgroundImage: "/assets/images/usecase/Industrie.png", // Construction
    client: {
      name: "Construction Plus",
      logo: "CP", 
      location: "Marseille, France"
    },
    stats: [
      { value: "25%", label: "Cost savings" },
      { value: "98%", label: "Tracking accuracy" },
      { value: "50+", label: "Sites monitored" }
    ]
  },
  {
    id: "urban-planning",
    title: "Smart City Development",
    subtitle: "Community engagement at scale",
    backgroundImage: "/assets/images/usecase/Urbain.png", // Urban planning
    client: {
      name: "City Planning Dept",
      logo: "CPD",
      location: "Paris, France"
    },
    stats: [
      { value: "80%", label: "Stakeholder engagement" },
      { value: "92%", label: "Approval rate" },
      { value: "25+", label: "Projects planned" }
    ]
  },
  {
    id: "infrastructure-inspection",
    title: "Asset Management Excellence",
    subtitle: "Predictive maintenance mastery",
    backgroundImage: "/assets/images/usecase/Infrastructure.png", // Infrastructure
    client: {
      name: "Infrastructure Corp",
      logo: "IC",
      location: "Toulouse, France"
    },
    stats: [
      { value: "30%", label: "Cost reduction" },
      { value: "3x", label: "Faster inspections" },
      { value: "200+", label: "Assets managed" }
    ]
  }
];

export default function UseCasesOverview() {
  return (
    <>
      {/* Frise des domaines - Simple et propre */}
      <div className="section-outer panel py-2 xl:py-3">
        <div className="container">
          <div className="text-center">
            <div className="d-inline-flex gap-6 xl:gap-8 align-items-center flex-wrap">
              {useCaseDomains.map((domain, index) => (
                <div key={index} className="d-flex flex-column align-items-center text-center">
                  {/* Icône orange */}
                  <div className="mb-2">
                    <Image
                      src={domain.icon}
                      alt={domain.label}
                      width={55}
                      height={55}
                      className="d-block mx-auto"
                      style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(52%) saturate(6328%) hue-rotate(346deg) brightness(103%) contrast(94%)' }}
                    />
                  </div>
                  
                  {/* Titre */}
                  <h6 className="fs-7 text-dark dark:text-white fw-medium m-0 text-center">
                    {domain.label}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="section-outer panel py-4 xl:py-6">
        <div className="container">
          <div className="row gy-4 xl:gy-6">
            {useCases.map((useCase, index) => (
              <div key={useCase.id} className="col-12 lg:col-6">
                <Link href={`/ressources/use-cases/${useCase.id}`} className="text-decoration-none">
                  <div className="panel p-0 h-100 bg-white dark:bg-gray-800 rounded-3 hover:shadow-lg hover:border-primary transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    
                    {/* Header avec image de fond */}
                    <div 
                      className="panel p-4 xl:p-5 position-relative"
                      style={{
                        backgroundImage: `url(${useCase.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '140px'
                      }}
                    >
                      {/* Overlay avec dégradé sombre */}
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                          background: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)`,
                          zIndex: 1
                        }}
                      ></div>
                      
                      {/* Contenu par-dessus */}
                      <div className="position-relative" style={{ zIndex: 2 }}>
                        <div className="hstack justify-content-between align-items-start">
                          {/* Info client */}
                          <div className="hstack gap-3">
                            <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur rounded-2 d-flex align-items-center justify-content-center">
                              <span className="fs-5 fw-bold text-white">{useCase.client.logo}</span>
                            </div>
                            <div className="vstack gap-0">
                              <div className="fs-5 text-white fw-semibold">
                                {useCase.client.name}
                              </div>
                              <div className="fs-7 text-white text-opacity-80">
                                {useCase.client.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenu principal */}
                    <div className="panel p-4 xl:p-5">
                      {/* Titre percutant */}
                      <div className="mb-4">
                        <h3 className="h6 lg:h5 text-dark dark:text-white m-0 fw-semibold mb-1">
                          {useCase.title}
                        </h3>
                        <p className="fs-7 text-dark dark:text-white text-opacity-50 m-0">
                          {useCase.subtitle}
                        </p>
                      </div>

                      {/* Statistiques clés */}
                      <div className="row g-3 mb-4">
                        {useCase.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="col-4">
                            <div className="text-center">
                              <div className="h6 text-primary m-0 fw-bold">
                                {stat.value}
                              </div>
                              <div className="fs-8 text-dark dark:text-white text-opacity-60">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Call to Action */}
                      <div className="hstack justify-content-between align-items-center pt-3 border-top border-gray-100 dark:border-gray-700">
                        <span className="fs-7 text-primary fw-medium">
                          Read case study
                        </span>
                        <div className="w-8 h-8 bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="unicon-arrow-right fs-7 text-primary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  );
} 