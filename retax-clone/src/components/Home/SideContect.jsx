import { ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Icon } from '@chakra-ui/react'
import React from 'react'

export default function SideContect({onChange ,toggle}) {
  return (
    <Box  
    position={'fixed'}  
    border='1px' borderColor='red.200'
    bgColor={"blackAlpha.900"}
    w={!toggle?"78.5%":"98%"} h={"100px"} pb={"10px"}
    overflow={"hidden"}
     >
        <Center>
        <Button onClick={onChange} ><Icon as={ArrowRightIcon} /></Button>
        </Center>
    </Box>
  )
}
