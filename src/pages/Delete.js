import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import { Button } from '@chakra-ui/react'
const Delete = () => {
    let nftname = useParams();
    
    let nftName=nftname.name;
    
    let navigate=useNavigate();
    
    
    let deletenft= async () => {
        console.log(nftName,"Delete");
       await fetch(`http://20.204.74.133/api/nft-delete/${nftName}`,{
            method : "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        navigate("/",{replace:true})
        
    }

    return (
        <div>
            <h1>Are You Sure you want to delete {nftName}?</h1>
            <Button colorScheme='blue' onClick={deletenft}>Yes</Button>
            <Button colorScheme='blue' onClick={()=>{navigate("/",{replace:true})}}>No</Button>
        </div>
    )
}

export default Delete
