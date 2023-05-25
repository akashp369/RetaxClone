import React from "react"
import { Box, InputGroup, Input, InputRightElement } from '@chakra-ui/react'

export const Customer=()=>{

    return <Box>
        <Box></Box>
        <Box>
            <Box>
                <Box p={4} fontSize='xl' textAlign={[ 'left']} fontWeight="bold"> Customers</Box>

                <Box>
                    <Box>
                        {/* serach box and some paraMeter */}
                        <InputGroup>
                            <Input placeholder="Search" />
                            <InputRightElement>
                            </InputRightElement>
                        </InputGroup>
                        </Box>
                    <Box>sorting</Box>
                </Box>
            </Box>

            <Box>



            </Box>

        </Box>
    </Box>
}