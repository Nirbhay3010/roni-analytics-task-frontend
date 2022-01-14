import React from 'react';
// import Options from '../components/Options.js';
import {Link} from 'react-router-dom';
import OptionCard from '../components/OptionCard'
const Homepage = () => {
    return (
        <div>
            <Link to='/nfts'>
            <OptionCard title={{data:"See All NFTS"}}>
            </OptionCard>
            </Link>

            <Link to='/add-nft'>
            <OptionCard title={{data:"Add NFTS"}}>
            
            </OptionCard>
            </Link>
            

        </div>
    )
}

export default Homepage
