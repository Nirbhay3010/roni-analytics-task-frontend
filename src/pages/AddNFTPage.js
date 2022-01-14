import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Button} from '@chakra-ui/react'
const AddNFTPage = () => {
    let [price,setprice]=useState();
    let [name,setname]=useState();
    let navigate = useNavigate();
    let addNFT = async ()=> {
        console.log(name,price)
        await fetch("http://20.204.74.133/api/create-nft" , {
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name":name,
                "price":price
            })
        })
        navigate("/",{replace:true})
    }




    return (
        <div className="form-group">
            <input type="text" class="form-control" placeholder="Enter NFT name" required onChange={(e)=>{setname(e.target.value)}} value={name} />
            <br />
            <input type="text" class="form-control" placeholder="Enter NFT price" required onChange={(e)=>{setprice(e.target.value)}} value={price}></input>
            <br />
            <Button colorScheme='blue' onClick={addNFT}>Add NFT</Button>
            <br />
            
        </div>
    )
}

export default AddNFTPage
