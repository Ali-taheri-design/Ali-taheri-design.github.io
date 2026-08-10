import BrandCaseStudy, { CaseImage, CaseSection } from './BrandCaseStudy'

import logoPresentationImage from '../../imports/hamid-abbasi-case/logo-presentation.png'
import markImage from '../../imports/hamid-abbasi-case/mark.png'
import colorsImage from '../../imports/hamid-abbasi-case/brand-colors.png'

export default function HamidAbbasi() {
  return (
    <BrandCaseStudy
      accent="#d5af34"
      projectNumber="06"
      category="Personal Brand"
      title="Hamid Abbasi"
      description="A distinctive personal identity created to reflect the character, professionalism, and individuality of its owner through a refined typographic approach. The custom letterform transforms the Persian name into a timeless signature."
      year="2025"
      industry="Personal Branding"
      services="Identity & Art Direction"
      heroSrc={logoPresentationImage}
      heroAlt="Gold Hamid Abbasi bilingual signature on a deep green background"
      nextName="S Bar"
      nextTo="/projects/s-bar"
    >
      <CaseSection index="02" title="The Mark">
        <CaseImage className="brand-case-contained brand-case-artwork" src={markImage} alt="Hamid Abbasi custom Persian signature wordmark" />
      </CaseSection>

      <CaseSection index="03" title="Brand Colors">
        <CaseImage className="brand-case-framed" src={colorsImage} alt="Hamid Abbasi gold and deep green brand palette" />
      </CaseSection>
    </BrandCaseStudy>
  )
}
