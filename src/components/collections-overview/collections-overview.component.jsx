import React from 'react';

import './collections-overview.styles.scss';


import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors'


import CollectionPreviw from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => {

    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...otherCollectionItem }) => (
                    <CollectionPreviw key={id} {...otherCollectionItem}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);