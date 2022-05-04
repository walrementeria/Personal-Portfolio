import React from "react";
import {
  Heading,
  VStack,
  useMediaQuery,
  Text,
  Icon,
  Box,
  Flex,
} from "@chakra-ui/react";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { SiChakraui } from "react-icons/si";

export const Contact = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 845px)");
  return (
    <VStack
      mt="8em"
      w="full"
      p={isNotSmallerScreen ? "32" : "3"}
      justify="center"
      gap={4}
      textAlign="center"
    >
      <Flex direction="column" align="center">
        <Heading
          py={8}
          fontFamily="Urbanist"
          fontWeight="Bold"
          color="cyan.400"
          fontSize="2xl"
        >
          ¡Ponte en contacto! y trabajemos juntos
        </Heading>
        <SocialLinks />
        <Box mt={8} display="flex" alignItems="center">
          <Text fontSize="xs">Echo por mi con</Text>
          <Icon color="teal.600" mx={2} as={SiChakraui} h={4} w={4} />
          <Text fontSize="xs">Chakra UI</Text>
        </Box>
      </Flex>
    </VStack>
  );
};
