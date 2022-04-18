import {registerBlockType} from '@wordpress/blocks';
import Header from './components/Header';
import Footer from './components/Footer';
import LoveUsing from './components/LoveUsing';
import Static1 from './components/Static1';
import SystemReqs from './components/SystemReqs';
import {RichText} from '@wordpress/block-editor';
import './components/Sectionsummary.css';
import Pagejump from './components/Pagejump';
import Banner from './components/Banner';
const { withSelect } = wp.data;


registerBlockType('gtcb-blocks/custom-block',{
    title:'VinylMaster Footer',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Footer/>),
    save: () => (<Footer/>)
});

registerBlockType('gtcb-blocks/custom-block2',{
    title:'VinylMaster Header',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Header/>),
    save: () => (<Header/>)
});

registerBlockType('gtcb-blocks/custom-block3',{
    title:'VinylMaster LoveUsing',
    icon: 'index-card',
    category : 'common',

    edit: () => (<LoveUsing/>),
    save: () => (<LoveUsing/>)
});

registerBlockType('gtcb-blocks/custom-block4',{
    title:'VinylMaster Static1',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Static1/>),
    save: () => (<Static1/>)
});

registerBlockType('gtcb-blocks/custom-block5',{
    title:'VinylMaster System Requirements',
    icon: 'index-card',
    category : 'common',

    edit: () => (<SystemReqs/>),
    save: () => (<SystemReqs/>)
});



registerBlockType('gtcb-blocks/custom-block6',{
    title:'VinylMaster Section Summary Dark',
    icon: 'index-card',
    category : 'common',

    attributes: {
        headerText: {
            type: 'array',
            source: 'children',
            selector : 'h3'
        },
        bodyText: {
            type: 'array',
            source: 'children',
            selector : '.thetext'
        }
    },

    edit: (props) => {
        let {attributes: {headerText,bodyText}, setAttributes } = props;

        return(
            <div className= "sectionsummary" style={{backgroundColor : "#DEDEDE"}}> 
                <RichText
                tagName="h3"
                placeholder={'Header Text'}
                value = {headerText}
                onChange={(value) => setAttributes({headerText: value})}                
                /> 
                <RichText
                tagName="div"
                placeholder={'Body Text'}
                value = {bodyText}
                onChange={(value) => setAttributes({bodyText: value})}      
                className="thetext"
                />            
            </div>                 
        );
    },
    save: (props) => {
        let {attributes: {headerText,bodyText} } = props;

        return(
            <div className= "sectionsummary" style={{backgroundColor : "#DEDEDE"}}> 
                <RichText.Content
                tagName="h3"
                value = {headerText}            
                /> 
                <RichText.Content
                tagName="div"
                value = {bodyText}    
                className="thetext"                
                />             
            </div>                 
        );
    }
});

registerBlockType('gtcb-blocks/custom-block7',{
    title:'VinylMaster Pagejumper',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Pagejump/>),
    save: () => (<Pagejump/>)
});

registerBlockType('gtcb-blocks/custom-block8',{
    title:'VinylMaster Section Summary',
    icon: 'index-card',
    category : 'common',

    attributes: {
        headerText: {
            type: 'array',
            source: 'children',
            selector : 'h3'
        },
        bodyText: {
            type: 'array',
            source: 'children',
            selector : '.thetext'
        }
    },

    edit: (props) => {
        let {attributes: {headerText,bodyText}, setAttributes } = props;

        return(
            <div className= "sectionsummary"> 
                <RichText
                tagName="h3"
                placeholder={"Header Text"}
                value = {headerText}
                onChange={(value) => setAttributes({headerText: value})}                
                /> 
                <RichText
                tagName="div"
                placeholder={"Body Text"}
                value = {bodyText}
                onChange={(value) => setAttributes({bodyText: value})}      
                className="thetext"
                />            
            </div>                 
        );
    },
    save: (props) => {
        let {attributes: {headerText,bodyText} } = props;

        return(
            <div className= "sectionsummary"> 
                <RichText.Content
                tagName="h3"
                value = {headerText}            
                /> 
                <RichText.Content
                tagName="div"
                value = {bodyText}    
                className="thetext"                
                />             
            </div>                 
        );
    }
});

registerBlockType('gtcb-blocks/custom-block9',{
    title:'VinylMaster Banner',
    icon: 'index-card',
    category : 'common',

    attributes: {
        mediaId: {
            type: 'number',
            default: 0
        },
        mediaUrl: {
            type: 'string',
            default: ''
        }
    },

    edit: withSelect((select, props) => {
        return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined };
    })(Banner),

    save: (props) => {

        const { attributes } = props;

        const blockStyle = {
            backgroundImage: attributes.mediaUrl != 0 ? 'url("' + attributes.mediaUrl + '")' : 'none'
        };
     
        return(
            <div style={blockStyle}>
                    ... Your block content here...
            </div>
        );
    }
});