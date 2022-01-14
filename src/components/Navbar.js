import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link to="/">
            Logo
            </Link>
            </Box>
          <Box>
          <Link to="/nfts">
          See All NFTS
            </Link>
            </Box>
          <Box>
          <Link to="/add-nft">
          Add NFTS
          </Link>
           </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}



          // <NavLink to='/' activeStyle>
          //   Home
          // </NavLink>

          // <NavLink to='/nfts' activeStyle>
          //   See NFTS
          // </NavLink>
          // <NavLink to='/add-nft' activeStyle>
          //   Add NFT
          // </NavLink>
        
  
export default Navbar;