import BrandCaseStudy, { CaseImage, CaseSection, Reveal } from './BrandCaseStudy'

import heroImage from '../../imports/fars-roboyar-case/hero-wall.png'
import symbolImage from '../../imports/fars-roboyar-case/symbol.png'
import markDeconstructionImage from '../../imports/fars-roboyar-case/mark-deconstruction.png'
import wordmarkGridImage from '../../imports/fars-roboyar-case/wordmark-grid.png'
import symbolGridImage from '../../imports/fars-roboyar-case/symbol-grid.png'
import colorsImage from '../../imports/fars-roboyar-case/brand-colors.png'
import logoSystemImage from '../../imports/fars-roboyar-case/logo-system.png'
import patternImage from '../../imports/fars-roboyar-case/pattern.png'
import applicationImage from '../../imports/fars-roboyar-case/application-kit.png'

export default function FarsRoboyar() {
  return (
    <BrandCaseStudy
      accent="#d81f26"
      projectNumber="03"
      category="Brand Identity"
      title="Fars Roboyar"
      description="A contemporary identity system for a drone technology company delivering aerial solutions across industry and agriculture. The visual language is built around precision, motion, and reliability."
      year="2025"
      industry="Drone Technology"
      services="Identity & Art Direction"
      heroSrc={heroImage}
      heroAlt="Illuminated Fars Roboyar logo in a dark architectural space"
      nextName="Code Intelligence"
      nextTo="/projects/code-intelligence"
    >
      <CaseSection index="02" title="The Mark">
        <div className="brand-case-two-column brand-case-contained">
          <CaseImage className="brand-case-artwork" src={symbolImage} alt="Fars Roboyar standalone FR symbol" />
          <CaseImage className="brand-case-artwork" src={markDeconstructionImage} alt="Fars Roboyar symbol built from the letters F and R" />
        </div>
      </CaseSection>

      <CaseSection index="03" title="Geometry & Grid">
        <div className="brand-case-two-column brand-case-contained">
          <CaseImage className="brand-case-artwork" src={wordmarkGridImage} alt="Fars Persian wordmark construction grid" />
          <CaseImage className="brand-case-artwork" src={symbolGridImage} alt="Fars Roboyar symbol construction grid" />
        </div>
      </CaseSection>

      <CaseSection index="04" title="Brand Colors">
        <CaseImage className="brand-case-framed" src={colorsImage} alt="Fars Roboyar red, graphite, silver and white brand palette" />
      </CaseSection>

      <CaseSection index="05" title="Type System">
        <CaseImage src={logoSystemImage} alt="Fars Roboyar Persian and English logo system" />
      </CaseSection>

      <CaseSection index="06" title="Brand Pattern" className="brand-case-edge-to-edge">
        <div className="brand-case-edge-to-edge-media">
          <CaseImage src={patternImage} alt="Repeating Fars Roboyar monogram pattern" />
        </div>
      </CaseSection>

      <CaseSection index="07" title="Brand In Use">
        <Reveal className="brand-case-framed">
          <img className="brand-case-image" src={applicationImage} alt="Fars Roboyar identity applied to drone equipment, apparel and stationery" />
        </Reveal>
      </CaseSection>
    </BrandCaseStudy>
  )
}
