import React from 'react';
import { graphql } from 'gatsby';
//import '../../wp/wp-content/plugins/tomdo-plugin/build/index.css';
import '../style.css';
import SystemReqs from '../components/SystemReqs';
import Gallery from '../components/Gallery';

// 2. 👇
const WpProductTemplate = ({ data: { wpProduct } }) => {
  const { content , productData} = wpProduct;
// 3. 👇
  return (
    <section>
      <Gallery gallery={productData.gallery}/>
      <SystemReqs productData={productData}/>
      <div dangerouslySetInnerHTML={{ __html: content }} />
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
        systemRequirements {
          fieldGroupName
          minimumComputerConfiguration
          recommendedComputerConfiguration
        }
        gallery {
          header
          fieldGroupName
          bodyText
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;
export default WpProductTemplate;