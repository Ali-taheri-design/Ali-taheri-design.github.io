import BrandCaseStudy, { CaseImage, CaseSection } from './BrandCaseStudy'

import heroImage from '../../imports/lion-company-case/hero.png'
import markImage from '../../imports/lion-company-case/mark.png'
import logoVariantsImage from '../../imports/lion-company-case/logo-variants.png'
import geometryImage from '../../imports/lion-company-case/geometry.png'
import brandColorsImage from '../../imports/lion-company-case/brand-colors.png'
import wordmarkImage from '../../imports/lion-company-case/wordmark.png'
import patternImage from '../../imports/lion-company-case/pattern.png'
import applicationsImage from '../../imports/lion-company-case/applications.png'

export default function LionCompany() {
  return (
    <BrandCaseStudy
      accent="#ffc532"
      projectNumber="09"
      category="Technology"
      title="Lion Company"
      description="A contemporary brand identity designed to establish a bold and recognizable corporate presence. The visual language combines geometric precision with modern simplicity, representing confidence, reliability, and a future-focused vision."
      year="2024"
      industry="Computer Retail"
      services="Identity & Art Direction"
      heroSrc={heroImage}
      heroAlt="Yellow Lion Company bilingual logo on a deep navy background"
      nextName="Vorma Studio"
      nextTo="/projects/vorma"
    >
      <CaseSection index="02" title="The Mark">
        <CaseImage
          className="brand-case-contained brand-case-artwork"
          src={markImage}
          alt="Lion Company geometric lion monogram"
        />
      </CaseSection>

      <CaseSection index="03" title="Logo Variants">
        <CaseImage
          className="brand-case-framed"
          src={logoVariantsImage}
          alt="Lion Company mark shown in navy and yellow color variants"
        />
      </CaseSection>

      <CaseSection index="04" title="Geometry & Grid">
        <CaseImage
          className="brand-case-contained brand-case-artwork"
          src={geometryImage}
          alt="Construction grid for the Lion Company geometric mark"
        />
      </CaseSection>

      <CaseSection index="05" title="Brand Colors">
        <CaseImage
          className="brand-case-framed"
          src={brandColorsImage}
          alt="Lion Company navy and yellow brand color palette"
        />
      </CaseSection>

      <CaseSection index="06" title="Type System">
        <CaseImage
          className="brand-case-contained brand-case-artwork"
          src={wordmarkImage}
          alt="Lion Company custom Persian wordmark"
        />
      </CaseSection>

      <CaseSection index="07" title="Brand Pattern" className="brand-case-edge-to-edge">
        <div className="brand-case-edge-to-edge-media">
          <CaseImage src={patternImage} alt="Repeating yellow Lion Company monogram pattern" />
        </div>
      </CaseSection>

      <CaseSection index="08" title="Brand in Use">
        <CaseImage
          className="brand-case-framed"
          src={applicationsImage}
          alt="Lion Company invoice, folder, and letterhead applications"
        />
      </CaseSection>
    </BrandCaseStudy>
  )
}
