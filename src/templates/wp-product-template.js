import React from 'react';
import { graphql } from 'gatsby';
//import '../../wp/wp-content/plugins/tomdo-plugin/build/index.css';
import SystemReqs from '../components/SystemReqs';
import Gallery from '../components/Gallery';
import Sectionsummary from '../components/Sectionsummary';
import Pagejump from '../components/Pagejump';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Static1 from '../components/Static1';
import LoveUsing from '../components/LoveUsing';
import '../components/style.css'
// just commenting here for later use <div dangerouslySetInnerHTML={{ __html: content }} />
// 2. 👇 
const WpProductTemplate = ({ data: { wpProduct } }) => {
  const {productData} = wpProduct;
// 3. 👇
  return (
    <section>
      <Banner data={productData.banner}/>
      <Pagejump/>
      <Sectionsummary data={productData.productIntro}/>
      <Sectionsummary data={productData.accordionIntro}/>
      <Sectionsummary data={productData.galleryIntro}/>
      <Gallery gallery={productData.gallery}/>
      <Sectionsummary data={productData.tableIntro}/>
      <Sectionsummary data={productData.tableOutro}/>      
      <SystemReqs productData={productData}/>  
      <Static1 data={productData.downloadUpgradeBlock}/>
      <LoveUsing data={productData.reviewBlock}/>
      <Footer/>    
    </section>
  );
};
// 1. 👇
export const query = graphql`
  query($id: String!) {
    wpProduct(id: { eq: $id }) {
      content
      productData {
        fieldGroupName
        productIntro {
          bodyText
          fieldGroupName
          header
          color
        }
        gallery {
          bodyText
          fieldGroupName
          header
          image {
            sourceUrl
          }
        }
        systemRequirements {
          fieldGroupName
          minimumComputerConfiguration
          recommendedComputerConfiguration
        }
        galleryIntro {
          bodyText
          color
          fieldGroupName
          header
        }
        tableOutro {
          bodyText
          color
          fieldGroupName
          header
        }
        tableIntro {
          bodyText
          color
          fieldGroupName
          header
        }
        accordionIntro {
          bodyText
          color
          fieldGroupName
          header
        }
        banner {
          fieldGroupName
          heading
          subheading
          image {
            sourceUrl
          }
        }
        downloadUpgradeBlock {
          downloadText
          fieldGroupName
          upgradeText
        }
        reviewBlock {
          bodyText
          fieldGroupName
          heading
          subheading
        }
      }
    }
  }
`;
export default WpProductTemplate;