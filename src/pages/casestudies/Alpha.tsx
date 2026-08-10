import BrandCaseStudy, { CaseImage, CaseSection } from './BrandCaseStudy'

import heroImage from '../../imports/alpha-case/hero.png'
import geometryImage from '../../imports/alpha-case/geometry.png'
import logoVariantsImage from '../../imports/alpha-case/logo-variants.png'
import patternImage from '../../imports/alpha-case/pattern.png'
import packagingImage from '../../imports/alpha-case/packaging.png'
import wordmarkImage from '../../imports/alpha-case/wordmark.png'
import websiteImage from '../../imports/alpha-case/website.png'

export default function Alpha() {
  return (
    <BrandCaseStudy
      accent="#e21f2b"
      projectNumber="08"
      category="Technology"
      title="Alpha"
      description="A contemporary brand identity for a mobile and service company offering smart devices, accessories, and connected lifestyle solutions. The visual system reflects clarity, reliability, and innovation."
      year="2024"
      industry="Mobile Brand & Services"
      services="Identity & Art Direction"
      heroSrc={heroImage}
      heroAlt="White Alpha monogram over a sculptural dark blue background"
      nextName="Lion Company"
      nextTo="/projects/lion-company"
    >
      <CaseSection index="02" title="Geometry & Grid">
        <div className="brand-case-stack brand-case-contained">
          <CaseImage className="brand-case-narrow brand-case-artwork" src={geometryImage} alt="Alpha monogram construction grid" />
          <CaseImage className="brand-case-contained brand-case-artwork" src={logoVariantsImage} alt="Alpha monogram and wordmark variants" />
        </div>
      </CaseSection>

      <CaseSection index="03" title="Brand Pattern" className="brand-case-edge-to-edge">
        <div className="brand-case-edge-to-edge-media">
          <CaseImage src={patternImage} alt="Repeating white Alpha monogram pattern" />
        </div>
      </CaseSection>

      <CaseSection index="04" title="Print & Packaging">
        <CaseImage className="brand-case-framed" src={packagingImage} alt="Alpha Mobile branded product packaging" />
      </CaseSection>

      <CaseSection index="05" title="Type System">
        <CaseImage className="brand-case-contained brand-case-hoverable" src={wordmarkImage} alt="Alpha Mobile custom wordmark" />
      </CaseSection>

      <CaseSection index="06" title="Website Mockup">
        <CaseImage className="brand-case-framed" src={websiteImage} alt="Alpha Mobile website displayed on a laptop" />
      </CaseSection>
    </BrandCaseStudy>
  )
}
