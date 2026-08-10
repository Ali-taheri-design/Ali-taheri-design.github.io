import BrandCaseStudy, { CaseImage, CaseSection } from './BrandCaseStudy'

import logoPresentationImage from '../../imports/s-bar-case/logo-presentation.png'
import markImage from '../../imports/s-bar-case/mark.png'
import geometryImage from '../../imports/s-bar-case/geometry.png'

export default function SBar() {
  return (
    <BrandCaseStudy
      accent="#34bce8"
      projectNumber="07"
      category="Industry"
      title="S Bar"
      description="A modern identity for a transportation company focused on reliable logistics and efficient mobility solutions. The system combines simplicity and movement, reflecting a brand built around connectivity, trust, and seamless transportation."
      year="2023"
      industry="Transportation & Logistics"
      services="Identity & Art Direction"
      heroSrc={logoPresentationImage}
      heroAlt="Blue S Bar bilingual transport logo on a white background"
      nextName="Alpha"
      nextTo="/projects/alpha"
    >
      <CaseSection index="02" title="The Mark">
        <CaseImage className="brand-case-contained brand-case-artwork" src={markImage} alt="S Bar standalone truck monogram" />
      </CaseSection>

      <CaseSection index="03" title="Geometry & Grid">
        <CaseImage className="brand-case-contained" src={geometryImage} alt="S Bar symbol formed from the Latin S and Persian bar lettering" />
      </CaseSection>
    </BrandCaseStudy>
  )
}
