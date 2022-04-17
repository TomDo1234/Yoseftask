import {registerBlockType} from '@wordpress/blocks';
import Header from './components/Header';
import Footer from './components/Footer';
import LoveUsing from './components/LoveUsing';
import Static1 from './components/Static1';
import SystemReqs from './components/SystemReqs';

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