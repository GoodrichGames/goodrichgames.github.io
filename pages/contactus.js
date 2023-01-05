import ContentSection from '../components/content/ContentSection/ContentSection';
import ContentItem from './../components/content/ContentSection/ContentItem';
import BaseTemplate from './../components/Templates/BaseTemplate';
import ExportedImage from "next-image-export-optimizer";
import prefix from '../utils/prefix';

export default function ContactUs() {
  return (
    <BaseTemplate title="Contact Us" description="About Mana Source and Goodrich Games">
      <ContentSection>
        <ContentItem title='email'>
          For business inquires contact us at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a>.
        </ContentItem>
        <ExportedImage src={prefix + '/images/GG-Logo-dark-bg.webp'} alt='Goodrich Games Logo' width="100%" height="10%" layout="responsive" objectFit="contain" priority={true} />
      </ContentSection>
    </BaseTemplate>
  )
}
