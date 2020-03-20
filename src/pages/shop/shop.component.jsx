import React from 'react';

import ShopData from './shop.data';
import CollectionPreviw from '../../components/collection-preview/collection-preview.component'
class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: ShopData
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionItem }) => (
                        <CollectionPreviw key={id} {...otherCollectionItem}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;