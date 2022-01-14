import React from 'react'
import { Box,Image } from '@chakra-ui/react'

const OptionCard = (title) => {
  const option = {
    imageUrl: 'https://cdn.discordapp.com/attachments/672861948764749841/931450523331215360/nft.png',
    imageAlt: 'Cool Backgound',
    title: title.title.data,
    
  }

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={option.imageUrl} alt={option.imageAlt} />

      <Box p='6'>
        

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {option.title}
        </Box>

        
      </Box>
    </Box>
  )
}


export default OptionCard
