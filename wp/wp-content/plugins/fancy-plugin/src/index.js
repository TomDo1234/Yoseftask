import {registerBlockType} from '@wordpress/blocks';
import Header from './components/Header'

registerBlockType('gtcb-blocks/custom-block',{
    title:'Tom Block',
    icon: 'index-card',
    category : 'common',

    edit: () => (<div>lol 12344444</div>),
    save: () => (<div>lol 12344444</div>)
});

registerBlockType('gtcb-blocks/custom-block2',{
    title:'Tom Block2',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Header/>),
    save: () => (<Header/>)
});