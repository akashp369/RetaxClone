import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { Calendar } from 'antd';

const CalendarComp = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return(
    <Box>
        <Flex
        ml={{ base: 0, md: 0 }}
        px={{ base: 4, md: 4 }}
        pt={0} pb={0}
        height="60px"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        // justifyContent={{ base: 'center', md: 'center' }}
        textAlign={"center"}
        fontFamily="Courier"
        >
        <Heading size={"md"}>Calendar</Heading>
      </Flex>
        <Calendar onPanelChange={onPanelChange} />
    </Box>

  )
};
export default CalendarComp;