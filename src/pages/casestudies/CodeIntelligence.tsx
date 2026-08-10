import BrandCaseStudy, { CaseImage, CaseSection, Reveal } from './BrandCaseStudy'

import heroImage from '../../imports/code-intelligence-case/hero-wall.png'
import markImage from '../../imports/code-intelligence-case/mark.png'
import geometryImage from '../../imports/code-intelligence-case/geometry-grid.png'
import colorsImage from '../../imports/code-intelligence-case/brand-colors.png'
import logoSystemImage from '../../imports/code-intelligence-case/logo-system.png'
import patternImage from '../../imports/code-intelligence-case/pattern.png'
import applicationsImage from '../../imports/code-intelligence-case/applications.png'
import finalPrimaryImage from '../../imports/code-intelligence-case/final-primary.png'
import finalPurpleImage from '../../imports/code-intelligence-case/final-purple.png'
import finalTealImage from '../../imports/code-intelligence-case/final-teal.png'

export default function CodeIntelligence() {
  return (
    <BrandCaseStudy
      accent="#4563d9"
      projectNumber="04"
      category="Brand Identity"
      title="Code Intelligence"
      description="A modern brand identity for an AI-driven technology company focused on intelligent software solutions and digital innovation. The system balances precision, momentum, and forward thinking."
      year="2026"
      industry="Artificial Intelligence"
      services="Identity & Art Direction"
      heroSrc={heroImage}
      heroAlt="Illuminated Code Intelligence identity in a blue and violet architectural space"
      nextName="Rendanlab"
      nextTo="/projects/rendanlab"
    >
      <CaseSection index="02" title="The Mark">
        <Reveal className="brand-case-panel">
          <img src={markImage} alt="Code Intelligence D arrow application icon" />
        </Reveal>
      </CaseSection>

      <CaseSection index="03" title="Geometry & Grid">
        <CaseImage className="brand-case-contained" src={geometryImage} alt="Code Intelligence bilingual logo construction grid" />
      </CaseSection>

      <CaseSection index="04" title="Brand Colors">
        <CaseImage className="brand-case-framed" src={colorsImage} alt="Code Intelligence violet, blue, teal and charcoal brand palette" />
      </CaseSection>

      <CaseSection index="05" title="Type System">
        <CaseImage src={logoSystemImage} alt="Code Intelligence bilingual logo and icon system" />
      </CaseSection>

      <CaseSection index="06" title="Brand Pattern" className="brand-case-edge-to-edge">
        <div className="brand-case-edge-to-edge-media">
          <CaseImage src={patternImage} alt="Repeating teal Code Intelligence arrow monogram pattern" />
        </div>
      </CaseSection>

      <CaseSection index="07" title="Brand In Use">
        <CaseImage className="brand-case-framed" src={applicationsImage} alt="Code Intelligence brand across signage, website, social media and merchandise" />
      </CaseSection>

      <CaseSection index="08" title="Final Presentation">
        <div className="brand-case-two-column brand-case-contained">
          <CaseImage className="brand-case-artwork" src={finalPrimaryImage} alt="Primary vertical Code Intelligence logo lockup" />
          <div className="brand-case-stack">
            <CaseImage className="brand-case-artwork" src={finalPurpleImage} alt="Purple Code Intelligence horizontal logo lockup" />
            <CaseImage className="brand-case-artwork" src={finalTealImage} alt="Teal Code Intelligence horizontal logo lockup" />
          </div>
        </div>
      </CaseSection>
    </BrandCaseStudy>
  )
}
