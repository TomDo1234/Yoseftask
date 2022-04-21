import React from 'react';
import { graphql } from 'gatsby';
//import '../../wp/wp-content/plugins/tomdo-plugin/build/index.css';
import SystemReqs from '../components/SystemReqs';
import Gallery from '../components/Gallery';
import Pagejump from '../components/Pagejump';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Static1 from '../components/Static1';
import '../components/Sectionsummary.css'
import LoveUsing from '../components/LoveUsing';
import '../components/style.css'
import Triplesvg from '../components/Triplesvg';
import Featuretable from '../components/Featuretable';
import Accordion from '../components/Accordion';
// just commenting here for later use <div dangerouslySetInnerHTML={{ __html: content }} />
// 2. 👇 
const WpProductTemplate = ({ data: { wpProduct ,wp } }) => {

  const {productData,productFeatures,blocks} = wpProduct;
  const {acfOptionsOptions} = wp;
// 3. 👇
  return (
    <section>
      {
        blocks.map((block,i) => {
          switch(block.name) {
            case "gtcb-blocks/custom-block":
              return <Footer key = {`${block.name}-${i}`}/>   
            case "gtcb-blocks/custom-block2":              
              break;
            case "gtcb-blocks/custom-block3":
              return <LoveUsing data={productData.reviewBlock} key = {`${block.name}-${i}`}/>   
            case "gtcb-blocks/custom-block4":
              return <Static1 data={productData.downloadUpgradeBlock} key = {`${block.name}-${i}`}/>
            case "gtcb-blocks/custom-block5":
              return  <SystemReqs productData={productData} key = {`${block.name}-${i}`}/> 
            case "gtcb-blocks/custom-block7":
              return <Pagejump key = {`${block.name}-${i}`}/>
            case "gtcb-blocks/custom-block9":
              return <Banner data={productData.banner} key = {`${block.name}-${i}`}/>
            case "gtcb-blocks/custom-block10":
              return <Triplesvg data={productData.svgRepeater} key = {`${block.name}-${i}`}/>
            case "gtcb-blocks/custom-block11":
              return <Featuretable data={productData.infoTable} key = {`${block.name}-${i}`}/>
            case "gtcb-blocks/custom-block12":
              return <Gallery gallery={productData.gallery} key = {`${block.name}-${i}`}/>
            case "gtcb-blocks/custom-block13":
              return <Accordion data={productFeatures.nodes} accordiondata = {acfOptionsOptions.accordionData} key = {`${block.name}-${i}`}/>
            default:
              return <div className="dangeroushtmlwrapper" dangerouslySetInnerHTML={{__html : block.originalContent}} key = {`${block.name}-${i}`}/>
          }
          return '';
        })
      } 
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
        svgRepeater {
          bodyText
          fieldGroupName
          image {
            sourceUrl
          }
        }
        infoTable {
          computerPlatform
          info {
            cut
            dsr
            infoLabel
            ltr
            pro
            xpt
          }
        }
      }
      productFeatures {
        nodes {
          wpParent {
            node {
              name
            }
          }
          wpChildren {
            nodes {
              name
            }
          }
          name
        }
      }
      blocks {
        name
        originalContent
      }
    }
    wp {
      acfOptionsOptions {
        accordionData {
          iconForFeature {
            bodyText
            feature {
              name
            }
            icon {
              sourceUrl
            }
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
export default WpProductTemplate;