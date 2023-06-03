import React, { useState } from 'react'
import Sidebar from './Sidebar'
import SideContect from '../components/Home/SideContect'
import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'

export default function Home() {
    
  return (
    <Box h="5000px" backgroundColor={"coral"}>
        <Heading>This is Home Component</Heading>
    </Box>
  )
}
