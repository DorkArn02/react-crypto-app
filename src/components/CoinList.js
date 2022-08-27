import React, { useEffect, useState } from 'react'
import { getMarket } from "../api/CryptoApi.js"
import { CoinItem } from './CoinItem.js'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Flex
} from '@chakra-ui/react'

export const CoinList = () => {
    const [market, setMarket] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await getMarket()
            setMarket(response)
        }
        getData()
    }, [])

    return (
        <Flex justify={"center"}>
            <TableContainer >
                <Table size={{ xs: "xs", lg: "sm" }} variant='striped'>
                    <Thead>
                        <Tr boxShadow={"xl"}>
                            <Th fontWeight={"extrabold"}>Coin</Th>
                            <Th fontWeight={"extrabold"}>Symbol</Th>
                            <Th display={{ base: 'none', md: 'table-cell' }} fontWeight={"extrabold"}>Price</Th>
                            <Th fontWeight={"extrabold"}>24h</Th>
                            <Th display={{ base: 'none', md: 'table-cell' }} fontWeight={"extrabold"}>Volume</Th>
                            <Th display={{ base: 'none', md: 'table-cell' }} fontWeight={"extrabold"}>Market cap</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {market && market.map((item, i) => {
                            return <CoinItem
                                id={item.id}
                                image={item.image}
                                mkCap={item.market_cap}
                                price={item.current_price}
                                priceChange24h={item.price_change_percentage_24h}
                                symbol={item.symbol}
                                volume={item.total_volume}
                                key={i}
                            />
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}
