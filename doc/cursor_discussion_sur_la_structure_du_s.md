# VIEW4SIGHT PROJECT RULES

## PROJECT OVERVIEW
You are working on View4Sight, a French SaaS platform for 3D point cloud visualization and sharing for surveyors and engineering firms. The project uses a purchased Next.js template "Lexend" from ThemeForest as the foundation for the marketing website.

## BUSINESS CONTEXT
- Target audience: French surveyors (géomètres-experts), architects, and engineering firms
- Value proposition: Web-based 3D data visualization without heavy desktop software
- Key differentiator: French data sovereignty and GDPR compliance
- Pricing: Freemium model starting at €0/month, scaling to enterprise

## TECHNICAL STACK
- Framework: Next.js 15.1.7
- React: 19.0.0
- CSS Framework: Bootstrap 5 + UIKit CSS (NOT Tailwind)
- Template: Lexend (ThemeForest purchase)
- Development server: http://localhost:3001
- Main route: /view4sight (custom implementation)

## STYLING APPROACH
- **CSS Framework**: Bootstrap 5 for layout and components
- **UI Components**: UIKit CSS for additional UI elements
- **Custom Styling**: Template-specific CSS classes
- **NO Tailwind**: Do not use Tailwind utility classes
- **Class naming**: Follow Bootstrap 5 conventions (e.g., `btn btn-primary`, `container`, `row`, `col-*`)

## COLOR PALETTE
- Primary color: #FE552E (Lava Pulse)
- Hover color: #C54E34 (Brick Pulse)
- CSS variables to update: --color-primary and --color-primary-600
- Main CSS file: /public/assets/css/theme/main.min.purge.css

## SITE STRUCTURE
### Main Pages:
- Homepage: /view4sight (fully implemented)
- Features: /fonctionnalites
- Pricing: /tarifs
- Security: /securite
- Resources: /ressources

### Homepage Sections (in order):
1. Hero - "Upload Your Scan. Navigate in 3D. Share Instantly."
2. PainBenefits - Client problems and pain points
3. MainFeatures - 4 core platform features
4. KpiStrip - Key statistics (30%, 50%, 80%, 150GB)
5. ClientLogos - Partner/client logos
6. Testimonials - French customer testimonials
7. SecurityBlock - French sovereignty messaging
8. FaqShort - Interactive FAQ section
9. CtaFinal - Final call-to-action with urgency

## COPYWRITING GUIDELINES
### Tone & Voice:
- Professional but approachable
- Technical accuracy without jargon
- French-first approach (sovereignty emphasis)
- Problem-solution focused narrative

### Key Messages:
- Stop wrestling with heavy 3D software
- Web-based collaboration for geospatial data
- French data hosting and sovereignty
- No software installation required
- Real-time 3D collaboration

### CTAs:
- Primary: "Start Free Trial" / "Commencer l'essai gratuit"
- Secondary: "Request a demo" / "Demander une démo"
- Risk reversal: "30-day free trial, no credit card required"

## COMPONENT STRUCTURE
### Header (/components/view4sight/Header.jsx):
- Logo: View4Sight logo (logo_v4s.png) on left
- Navigation: Accueil, Fonctionnalités, Tarifs, Sécurité, Ressources
- Right buttons: "Request a demo", "Log in", "Start free trial"
- Sticky behavior like home-3 template

### Reusable Components:
- Use existing Lexend components as base
- Adapt content for View4Sight messaging
- Maintain responsive design patterns
- Follow Bootstrap 5 + UIKit CSS conventions

## CONTENT REQUIREMENTS
### Statistics to highlight:
- 30% reduction in client validation time
- 50% fewer site visits required
- 80% clearer communication with stakeholders
- 150GB storage included in free trial

### Testimonials (French):
- Géomètre-expert from Lyon
- Bureau d'études VRD from Nantes
- Focus on time savings and client satisfaction

### Security messaging:
- ISO 27001 certification
- French data centers
- GDPR compliance
- On-premise options available

## FILE ORGANIZATION
### Custom View4Sight files:
- /app/view4sight/ - Main application pages
- /components/view4sight/ - Custom components
- /public/assets/images/ - View4Sight assets (logo_v4s.png)

### Template structure to preserve:
- /components/homes/ - Original template components
- /public/assets/css/ - Template styling (Bootstrap 5 + UIKit)
- /components/common/ - Shared template components

## DEVELOPMENT GUIDELINES
### When creating new components:
1. Start with existing Lexend components as base
2. Use Bootstrap 5 classes for layout (container, row, col-*, etc.)
3. Use UIKit CSS classes for UI components
4. Adapt styling to View4Sight brand colors
5. Replace placeholder content with View4Sight copywriting
6. Maintain responsive design patterns using Bootstrap's grid system
7. Ensure French language support

### When modifying existing files:
1. Preserve original template functionality
2. Create View4Sight-specific variants when needed
3. Update color variables in CSS files
4. Test on /view4sight route specifically
5. Maintain Bootstrap 5 + UIKit CSS class structure

### Code style:
- Use JSX for React components
- Follow Next.js 15 conventions
- Use Bootstrap 5 utility classes (e.g., `mb-4`, `text-center`, `btn btn-primary`)
- Use UIKit CSS components when appropriate
- **AVOID Tailwind classes** (no `bg-blue-500`, `text-lg`, `flex`, etc.)
- Comment custom modifications clearly

## TESTING CHECKLIST
- [ ] All pages load correctly on /view4sight route
- [ ] Header navigation works across all pages
- [ ] Color scheme matches brand guidelines (#FE552E primary)
- [ ] Bootstrap 5 responsive grid works on mobile/tablet
- [ ] French content displays correctly
- [ ] CTAs link to appropriate actions
- [ ] Images load properly (especially logo_v4s.png)
- [ ] Bootstrap 5 + UIKit CSS components render correctly

## PRIORITY FEATURES
1. Homepage optimization and content refinement
2. Color scheme implementation across all components
3. Features page development (/fonctionnalites)
4. Pricing page with French pricing (€)
5. Security page emphasizing French sovereignty
6. Contact forms and demo request functionality

## BRAND ASSETS
- Logo: logo_v4s.png (already integrated)
- Primary font: Follow Lexend template typography
- Icons: Use template's icon system
- Images: Professional, technical, French-focused when possible

## CSS FRAMEWORK REMINDERS
- **Bootstrap 5**: Use for layout, grid system, utilities, and components
- **UIKit CSS**: Use for additional UI elements and components
- **Custom CSS**: Template-specific styles in main.min.purge.css
- **NO Tailwind**: Never use Tailwind utility classes in this project

Remember: This is a B2B SaaS platform targeting French professionals. Every design and content decision should reflect professionalism, technical competence, and French business values. Always use Bootstrap 5 + UIKit CSS conventions, never Tailwind.
