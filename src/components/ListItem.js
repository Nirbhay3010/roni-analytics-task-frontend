import React from 'react'
import {Link} from 'react-router-dom';
import Cards from './Cards'

const ListItem = ({nft}) => {
    console.log(nft,"NFT here")
    
    return (
        <Link to={`/nft/${nft.name}`}>
            <Cards nft={nft} />
        </Link>
    )
}

export default ListItem
