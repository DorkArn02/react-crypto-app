import { Image, Text, Flex, Tr, Td } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CoinItem = ({ id, price, symbol, image, priceChange24h, volume, mkCap }) => {

    const navigate = useNavigate()

    const format = num =>
        String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')

    return (
        <Tr onClick={() => navigate(`/coin/${id}`)} _hover={{ transform: "scale(1.04)", transition: "0.3s", cursor: "pointer" }} boxShadow={"xl"}>
            <Td>{id}</Td>
            <Td><Flex align={"center"} gap={"5px"}><Image w={7} h={7} src={image} /> <Text as="span">{symbol}</Text></Flex></Td>
            <Td display={{ base: 'none', md: 'table-cell' }} isNumeric>$ {format(price.toFixed(7).toLocaleString())}</Td>
            <Td isNumeric color={priceChange24h < 0 ? "red" : "green"}>{priceChange24h.toFixed(1)} %</Td>
            <Td display={{ base: 'none', md: 'table-cell' }} isNumeric>$ {format(volume.toFixed(1))}</Td>
            <Td display={{ base: 'none', md: 'table-cell' }} isNumeric>$ {format(mkCap.toFixed(1))}</Td>
        </Tr>
    )
}
