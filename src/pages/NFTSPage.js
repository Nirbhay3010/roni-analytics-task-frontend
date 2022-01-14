import React,{useEffect,useState} from 'react'
import ListItem from '../components/ListItem'

const NFTSPage = () => {
    let [nfts,setnfts]=useState([]);
    
    useEffect(() => {
        getnfts();
    },[])
    
    let getnfts= async () => {
        let response = await fetch('http://20.204.74.133/api/all-nft/',{
            method : "GET",
            
        })
        let data=await response.json();
        
        setnfts(data)
        
    }

    return (
        <div>
            {nfts.map((nft,index)=>(
                   <ListItem key={index} nft={nft}/>
                ))}
            
        </div>
    )
}

export default NFTSPage
