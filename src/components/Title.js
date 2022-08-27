import { Flex, Heading, Icon, IconButton, Text, useColorMode, Center } from '@chakra-ui/react'
import React from 'react'
import { FaCoins, FaMoon, FaSun } from "react-icons/fa"
import { Link } from 'react-router-dom'

export const Title = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Center>
            <Flex
                align={"center"}
                justify={"center"}
                gap={2}
                marginBottom={5}
            >
                <Icon color={"gold"} marginTop={2} w={5} h={5} as={FaCoins} />
                <Heading
                    textAlign={"center"}
                    fontWeight={"extrabold"}
                    marginTop={1}
                    size={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'xl' }}
                >
                    <Link to="/">React <Text color={"gold"} as={"span"}>cryptocurrency</Text></Link>
                </Heading>
            </Flex>
            <IconButton borderRadius={"20px"} position={"absolute"} right={0} icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </IconButton>
        </Center>
    )
}
