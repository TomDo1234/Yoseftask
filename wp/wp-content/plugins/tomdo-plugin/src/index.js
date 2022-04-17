import {registerBlockType} from '@wordpress/blocks';
import Header from './components/Header';
import Footer from './components/Footer';
import LoveUsing from './components/LoveUsing';
import Static1 from './components/Static1';
import SystemReqs from './components/SystemReqs';
import {RichText} from '@wordpress/block-editor';
import './components/Sectionsummary.css';

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
    title:'VinylMaster Section Summary',
    icon: 'index-card',
    category : 'common',

    edit: (props) => {
        let {attributes: {headerText,bodyText,customcolor}, setAttributes } = props;

        return(
            <div className= 'sectionsummary'> 
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
                <RichText
                tagName="div"
                placeholder={'Custom Color'}
                value = {customcolor}
                onChange={(value) => setAttributes({customcolor: value})}      
                className="thetext"
                />              
            </div>                 
        );
    },
    save: (props) => {
        let {attributes: {headerText,bodyText,customcolor} } = props;

        return(
            <div className= {'sectionsummary '} style={{backgroundColor: customcolor}}> 
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