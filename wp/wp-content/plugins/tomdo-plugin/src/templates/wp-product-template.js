import React from 'react';
import { graphql } from 'gatsby';
import '../../build/index.css';
import '../style.css';

// 2. 👇
const WpProductTemplate = ({ data: { wpProduct } }) => {
  const { content } = wpProduct;
// 3. 👇
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
};
// 1. 👇
export const query = graphql`
  query($id: String!) {
    wpProduct(id: { eq: $id }) {
      content
    }
  }
`;
export default WpProductTemplate;