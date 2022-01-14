import React,{useEffect,useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import Cards from '../components/Cards'

const NFTPage = () => {
    let name = useParams();
    let nftName=name.name;

    let [nft,setnft]= useState(null);
    useEffect(() => {
        getnft();

    },[])
    
    let getnft= async () => {
        let response = await fetch(`http://20.204.74.133/api/nft-details/${nftName}`,{
            method : "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
        let data=await response.json();
        setnft(data);
        
    }

if(!nft){
    return(
        <div></div>
        )
}
    return (
        <div>
            <Cards nft={nft} />
            
            <Link to= {`/delete/${nftName}`}> Delete This NFT </Link>
            
        </div>
    )
}

export default NFTPage


