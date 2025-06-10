"use client";
import Image from "next/image";
import Link from "next/link";

export default function PainBenefits() {
  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-8 xl:py-12 bg-gray-900">
        <div className="container max-w-7xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
          >
            {/* Header Section */}
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-8 xl:mb-12 max-w-4xl mx-auto text-center">
              <div className="hero-badge mx-auto">
                Pain Points
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 text-white">
                Your 3D Data Deserves Better<br />
                Than Static Screenshots
              </h2>
              <p className="fs-6 xl:fs-5 text-white text-opacity-70 max-w-lg mx-auto">
                Sound familiar? Transform these daily frustrations into competitive advantages.
              </p>
            </div>

            {/* Two Column Layout with Arrow */}
            <div className="position-relative">
              <div className="row g-6 xl:g-8">
                
                {/* Left Column: Current Challenges */}
                <div className="col-12 lg:col-6">
                  <div className="panel">
                    <div className="d-flex align-items-center justify-content-center gap-3 mb-6 xl:mb-8">
                      <div className="w-4px h-32px bg-danger rounded-pill"></div>
                      <h3 className="h4 xl:h3 text-danger m-0 fw-bold">Current Challenges</h3>
                      <div className="w-4px h-32px bg-danger rounded-pill"></div>
                    </div>
                    
                    {/* Challenge 1 */}
                    <div className="panel mb-5 xl:mb-6 p-5 xl:p-6 rounded-3 position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.08) 0%, rgba(220, 53, 69, 0.03) 100%)', border: '2px solid rgba(220, 53, 69, 0.2)'}}>
                      <div className="position-absolute top-0 start-0 w-100 h-4px bg-danger"></div>
                      <div className="hstack gap-4 mb-4">
                        <div className="icon-box w-56px h-56px bg-danger rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center shadow-sm">
                          <i className="icon icon-2 unicon-desktop text-white"></i>
                        </div>
                        <div className="vstack gap-1">
                          <h4 className="h5 xl:h4 m-0 text-white fw-bold">
                            Juggling Multiple Desktop Tools
                          </h4>
                          <div className="w-32px h-2px bg-danger rounded-pill"></div>
                        </div>
                      </div>
                      <div className="hstack gap-3 align-items-start">
                        <div className="icon-box w-20px h-20px bg-danger rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center mt-1">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M1 1L11 11M11 1L1 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <p className="fs-6 xl:fs-5 text-white text-opacity-85 m-0 lh-relaxed">
                          You're switching between expensive desktop software, managing licenses, and wasting time on complex installations for every new project.
                        </p>
                      </div>
                    </div>

                    {/* Challenge 2 */}
                    <div className="panel mb-5 xl:mb-6 p-5 xl:p-6 rounded-3 position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.08) 0%, rgba(220, 53, 69, 0.03) 100%)', border: '2px solid rgba(220, 53, 69, 0.2)'}}>
                      <div className="position-absolute top-0 start-0 w-100 h-4px bg-danger"></div>
                      <div className="hstack gap-4 mb-4">
                        <div className="icon-box w-56px h-56px bg-danger rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center shadow-sm">
                          <i className="icon icon-2 unicon-user-exclamation text-white"></i>
                        </div>
                        <div className="vstack gap-1">
                          <h4 className="h5 xl:h4 m-0 text-white fw-bold">
                            Clients Can't Open Your Deliverables
                          </h4>
                          <div className="w-32px h-2px bg-danger rounded-pill"></div>
                        </div>
                      </div>
                      <div className="hstack gap-3 align-items-start">
                        <div className="icon-box w-20px h-20px bg-danger rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center mt-1">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M1 1L11 11M11 1L1 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <p className="fs-6 xl:fs-5 text-white text-opacity-85 m-0 lh-relaxed">
                          Your clients don't understand your 3D surveys through static PDFs. They need special software to see your data and miss the full value of your work.
                        </p>
                      </div>
                    </div>

                    {/* Challenge 3 */}
                    <div className="panel p-5 xl:p-6 rounded-3 position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.08) 0%, rgba(220, 53, 69, 0.03) 100%)', border: '2px solid rgba(220, 53, 69, 0.2)'}}>
                      <div className="position-absolute top-0 start-0 w-100 h-4px bg-danger"></div>
                      <div className="hstack gap-4 mb-4">
                        <div className="icon-box w-56px h-56px bg-danger rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center shadow-sm">
                          <i className="icon icon-2 unicon-clock text-white"></i>
                        </div>
                        <div className="vstack gap-1">
                          <h4 className="h5 xl:h4 m-0 text-white fw-bold">
                            Team Collaboration is Broken
                          </h4>
                          <div className="w-32px h-2px bg-danger rounded-pill"></div>
                        </div>
                      </div>
                      <div className="hstack gap-3 align-items-start">
                        <div className="icon-box w-20px h-20px bg-danger rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center mt-1">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M1 1L11 11M11 1L1 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <p className="fs-6 xl:fs-5 text-white text-opacity-85 m-0 lh-relaxed">
                          Your team loses time exchanging files via email. Annotations get lost, versions get mixed up, and collaboration becomes a nightmare.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: View4Sight Solutions */}
                <div className="col-12 lg:col-6">
                  <div className="panel">
                    <div className="d-flex align-items-center justify-content-center gap-3 mb-6 xl:mb-8">
                      <div className="w-4px h-32px bg-success rounded-pill"></div>
                      <h3 className="h4 xl:h3 text-success m-0 fw-bold">View4Sight Solutions</h3>
                      <div className="w-4px h-32px bg-success rounded-pill"></div>
                    </div>
                    
                    {/* Solution 1 */}
                    <div className="panel mb-5 xl:mb-6 p-5 xl:p-6 rounded-3 position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(25, 135, 84, 0.08) 0%, rgba(25, 135, 84, 0.03) 100%)', border: '2px solid rgba(25, 135, 84, 0.2)'}}>
                      <div className="position-absolute top-0 start-0 w-100 h-4px bg-success"></div>
                      <div className="hstack gap-4 mb-4">
                        <div className="icon-box w-56px h-56px bg-success rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center shadow-sm">
                          <i className="icon icon-2 unicon-globe text-white"></i>
                        </div>
                        <div className="vstack gap-1">
                          <h4 className="h5 xl:h4 m-0 text-white fw-bold">
                            Instant Browser-Based Viewing
                          </h4>
                          <div className="w-32px h-2px bg-success rounded-pill"></div>
                        </div>
                      </div>
                      <div className="hstack gap-3 align-items-start">
                        <div className="icon-box w-20px h-20px bg-success rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center mt-1">
                          <svg width="12" height="9" viewBox="0 0 16 12" fill="none">
                            <path d="M1 6L5.5 10.5L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="fs-6 xl:fs-5 text-white text-opacity-85 m-0 lh-relaxed">
                          Upload your point clouds once. Your team and clients navigate in 3D directly in their browser, no installation required.
                        </p>
                      </div>
                    </div>

                    {/* Solution 2 */}
                    <div className="panel mb-5 xl:mb-6 p-5 xl:p-6 rounded-3 position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(25, 135, 84, 0.08) 0%, rgba(25, 135, 84, 0.03) 100%)', border: '2px solid rgba(25, 135, 84, 0.2)'}}>
                      <div className="position-absolute top-0 start-0 w-100 h-4px bg-success"></div>
                      <div className="hstack gap-4 mb-4">
                        <div className="icon-box w-56px h-56px bg-success rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center shadow-sm">
                          <i className="icon icon-2 unicon-users-alt text-white"></i>
                        </div>
                        <div className="vstack gap-1">
                          <h4 className="h5 xl:h4 m-0 text-white fw-bold">
                            Live Team Collaboration
                          </h4>
                          <div className="w-32px h-2px bg-success rounded-pill"></div>
                        </div>
                      </div>
                      <div className="hstack gap-3 align-items-start">
                        <div className="icon-box w-20px h-20px bg-success rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center mt-1">
                          <svg width="12" height="9" viewBox="0 0 16 12" fill="none">
                            <path d="M1 6L5.5 10.5L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="fs-6 xl:fs-5 text-white text-opacity-85 m-0 lh-relaxed">
                          Shared annotations, collaborative measurements, direct feedback. Your entire team works on the same data, in real-time.
                        </p>
                      </div>
                    </div>

                    {/* Solution 3 */}
                    <div className="panel p-5 xl:p-6 rounded-3 position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(25, 135, 84, 0.08) 0%, rgba(25, 135, 84, 0.03) 100%)', border: '2px solid rgba(25, 135, 84, 0.2)'}}>
                      <div className="position-absolute top-0 start-0 w-100 h-4px bg-success"></div>
                      <div className="hstack gap-4 mb-4">
                        <div className="icon-box w-56px h-56px bg-success rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center shadow-sm">
                          <i className="icon icon-2 unicon-heart text-white"></i>
                        </div>
                        <div className="vstack gap-1">
                          <h4 className="h5 xl:h4 m-0 text-white fw-bold">
                            Clients Love the Experience
                          </h4>
                          <div className="w-32px h-2px bg-success rounded-pill"></div>
                        </div>
                      </div>
                      <div className="hstack gap-3 align-items-start">
                        <div className="icon-box w-20px h-20px bg-success rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center mt-1">
                          <svg width="12" height="9" viewBox="0 0 16 12" fill="none">
                            <path d="M1 6L5.5 10.5L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="fs-6 xl:fs-5 text-white text-opacity-85 m-0 lh-relaxed">
                          Your clients finally understand the value of your surveys. They navigate like Google Street View and validate projects faster.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Transition Arrow */}
              <div className="position-absolute top-50 start-50 translate-middle d-none lg:block z-index-1">
                <div className="w-80px h-80px bg-primary rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{background: 'linear-gradient(45deg, #FE552E, #C54E34)'}}>
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path d="M13 4L21 10M21 10L13 16M21 10H3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 