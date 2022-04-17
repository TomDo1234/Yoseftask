import {registerBlockType} from '@wordpress/blocks';
import Header from './components/Header';
import Footer from './components/Footer';

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