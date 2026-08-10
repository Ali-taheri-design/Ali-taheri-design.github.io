import BrandCaseStudy, { CaseImage, CaseSection, Reveal } from './BrandCaseStudy'

import logoPresentationImage from '../../imports/rendanlab-case/logo-presentation.png'
import markImage from '../../imports/rendanlab-case/mark.png'
import geometryImage from '../../imports/rendanlab-case/geometry-grid.png'
import colorsImage from '../../imports/rendanlab-case/brand-colors.png'
import wordmarkImage from '../../imports/rendanlab-case/wordmark.png'
import patternImage from '../../imports/rendanlab-case/pattern.png'

export default function Rendanlab() {
  return (
    <BrandCaseStudy
      accent="#4a9fd8"
      projectNumber="05"
      category="Technology"
      title="Rendanlab"
      description="A contemporary brand identity for an artificial intelligence company developing intelligent solutions that simplify complex digital challenges. The system blends precision, accessibility, and forward-looking technology."
      year="2026"
      industry="Artificial Intelligence"
      services="Identity & Art Direction"
      heroSrc={logoPresentationImage}
      heroAlt="Rendanlab bilingual logo shown on light blue and charcoal backgrounds"
      nextName="Hamid Abbasi"
      nextTo="/projects/hamid-abbasi"
    >
      <CaseSection index="02" title="The Mark">
        <Reveal className="brand-case-panel">
          <img src={markImage} alt="Rendanlab folded ribbon R symbol" />
        </Reveal>
      </CaseSection>

      <CaseSection index="03" title="Geometry & Grid">
        <CaseImage className="brand-case-contained" src={geometryImage} alt="Rendanlab Persian wordmark construction grid" />
      </CaseSection>

      <CaseSection index="04" title="Brand Colors">
        <CaseImage className="brand-case-framed" src={colorsImage} alt="Rendanlab blue, cyan, pale blue and charcoal brand palette" />
      </CaseSection>

      <CaseSection index="05" title="Type System">
        <CaseImage className="brand-case-contained" src={wordmarkImage} alt="Rendanlab Persian wordmark" />
      </CaseSection>

      <CaseSection index="06" title="Brand Pattern" className="brand-case-edge-to-edge">
        <div className="brand-case-edge-to-edge-media">
          <CaseImage src={patternImage} alt="Repeating Rendanlab folded ribbon symbol pattern" />
        </div>
      </CaseSection>
    </BrandCaseStudy>
  )
}
