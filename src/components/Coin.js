import { Box, Text, Heading, HStack, VStack, Badge, Image, Spacer, Grid, GridItem, StackDivider, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCoin } from '../api/CryptoApi'
import { Title } from './Title'

export const Coin = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState([])
    const { colorMode } = useColorMode()

    useEffect(() => {
        const getData = async () => {
            const response = await getCoin(id)
            setCoin(response)
        }
        getData()
    }, [id])

    const format = num =>
        String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')


    if (coin.image === undefined) {
        return (
            <>
                <Title />
            </>
        )
    }

    return (
        <>
            <Title />
            {coin ? (
                <VStack spacing={5}>
                    ó                    <Box>
                        <Heading
                            textAlign={"center"}
                            mt={1}
                            fontStyle={"italic"}
                            size={{ xs: 'sm', sm: 'md', md: 'lg', lg: 'xl' }}
                        >
                            {coin.id.charAt(0).toUpperCase() + coin.id.substr(1, coin.id.length)}
                        </Heading>
                    </Box>
                    <HStack w={"80%"} boxShadow={"lg"} spacing={5}>
                        <Box p={4}>
                            <Badge mb={2} borderRadius={10} colorScheme={"purple"}>Rank #{coin.coingecko_rank}</Badge>
                            <HStack>
                                <Image w={7} h={7} src={coin.image.thumb} />
                                <Text fontWeight={"bold"}>{coin.symbol}/USD</Text>
                            </HStack>
                        </Box>
                        <Spacer />
                        <Box p={4} >
                            <Heading mt={2} size={{ xs: "xs", lg: "lg", xl: "lg" }}>Current value: {"$" + format(coin.market_data.current_price.usd)}</Heading>
                        </Box>
                    </HStack>
                    <Grid p={4} overflowX={"auto"} templateColumns='repeat(6, 1fr)' gap={2} textAlign={"center"} boxShadow={"lg"} w={"80%"}>
                        <GridItem>
                            <Text bg={colorMode === 'dark' && "gray.700"} fontWeight={"bold"}>1 h</Text>
                            <Text>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(3)}%</Text>
                        </GridItem>
                        <GridItem>
                            <Text bg={colorMode === 'dark' && "gray.700"} fontWeight={"bold"}>24 h</Text>
                            <Text>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(3)}%</Text>
                        </GridItem>
                        <GridItem>
                            <Text bg={colorMode === 'dark' && "gray.700"} fontWeight={"bold"}>7 d</Text>
                            <Text>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(3)}%</Text>
                        </GridItem>
                        <GridItem>
                            <Text bg={colorMode === 'dark' && "gray.700"} fontWeight={"bold"}>14 d</Text>
                            <Text>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(3)}%</Text>
                        </GridItem>
                        <GridItem>
                            <Text bg={colorMode === 'dark' && "gray.700"} fontWeight={"bold"}>30 d</Text>
                            <Text>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(3)}%</Text>
                        </GridItem>
                        <GridItem>
                            <Text bg={colorMode === 'dark' && "gray.700"} fontWeight={"bold"}>1 yr</Text>
                            <Text>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(3)}%</Text>
                        </GridItem>
                    </Grid>
                    <VStack overflowX={"auto"} p={4} boxShadow={"lg"} w={"80%"} divider={<StackDivider />}>
                        <HStack w={"80%"}>
                            <Text fontWeight={"bold"} fontSize={{ base: 'xs', sm: 'sm' }}>24 Hour Low</Text>
                            <Spacer />
                            <Text >${format(coin.market_data.low_24h.usd)}</Text>
                        </HStack>
                        <HStack w={"80%"}>
                            <Text fontWeight={"bold"} fontSize={{ base: 'xs', sm: 'sm' }}>24 Hour High</Text>
                            <Spacer />
                            <Text>${format(coin.market_data.high_24h.usd)}</Text>
                        </HStack>
                        <HStack w={"80%"}>
                            <Text fontWeight={"bold"} fontSize={{ base: 'xs', sm: 'sm' }}>Market cap</Text>
                            <Spacer />
                            <Text>${format(coin.market_data.market_cap.usd)}</Text>
                        </HStack>
                        <HStack w={"80%"}>
                            <Text fontWeight={"bold"} fontSize={{ base: 'xs', sm: 'sm' }}>Circulating supply</Text>
                            <Spacer />
                            <Text>${format(coin.market_data.circulating_supply)}</Text>
                        </HStack>
                    </VStack>
                    <Box p={4} boxShadow={"lg"} w={"80%"}>
                        <Heading size={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'xl' }}
                            mb={2}>Description</Heading>
                        <Text fontSize={{ base: 'sm', sm: 'sm', md: "md" }} textAlign={"justify"}>{coin.description.en}</Text>
                    </Box>
                </VStack>
            ) : ""
            }

        </>
    )
}
