import { Center, Flex, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

export const SocialLinks = () => {
  return (
    <Flex justify="space-around" gap={6}>
      <Center>
        <Link href="/">
          <Icon w={10} h={10} as={IoLogoGithub} />
        </Link>
      </Center>
      <Center>
        <Link href="https://www.linkedin.com/in/walter-rementeria-556a77222">
          <Icon w={10} h={10} as={IoLogoLinkedin} />
        </Link>
      </Center>
      <Center>
        <Link href="https://wa.me/543525635432">
          <Icon w={10} h={10} as={IoLogoWhatsapp} />
        </Link>
      </Center>
    </Flex>
  );
};
