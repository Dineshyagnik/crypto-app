import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react'

const Footer = () => {
    return (
        <Box
            bgColor={'blackAlpha.900'}
            color={'whiteAlpha.700'}
            minH={'48'}
            px={'16'}
            py={['16', '8']}
        >
            <Stack
                direction={['column', 'row']}
                h={'full'}
                alignItems={'center'}
            >
                <VStack
                    w={'full'}
                    alignItems={['center', 'flex-start']}
                >
                    <Text fontWeight={'bold'}>About Us</Text>
                    <Text 
                    fontSize={'sm'} 
                    letterSpacing={'widest'} 
                    textAlign={['center','left']}
                    >
                        We are the best crypto trading app in India, we provide our guidance
                        at a very cheap price.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate fugiat unde consequuntur dolore a, illo, laboriosam, suscipit repellendus minima praesentium modi voluptas fuga. Odit in inventore accusantium culpa maiores minus! In vero ratione atque! Exercitationem eveniet minus maiores ullam unde quae excepturi molestiae provident quam impedit consectetur omnis magni optio architecto pariatur nisi error hic, quasi, obcaecati voluptates. Laudantium consequatur, accusantium libero eius placeat, tempora rem laboriosam veniam itaque ab magnam magni eveniet ut, enim dolores laborum dolore? Nemo officia aut soluta quas maiores consectetur libero quaerat aliquid reprehenderit. Numquam quod blanditiis error, ab earum est alias quo cumque id!
                    </Text>
                </VStack>
                <VStack>
                    <Avatar src='' boxSize={'28'} mt={['4', '0']} />
                    <Text>Our Founder</Text>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer;