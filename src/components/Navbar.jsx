import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar({ links }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      bg="#161313"
      borderBottom="1px solid"
      borderColor="rgba(255, 255, 255, 0.06)"
    >
      <Container maxW="7xl" py={{ base: 4, md: 5 }}>
        <Flex align="center" justify="space-between" gap={4}>
          <Text
            as="a"
            href="#home"
            fontFamily="var(--font-hk-modular)"
            fontWeight="700"
            fontSize={{ base: "1.55rem", md: "1.8rem" }}
            letterSpacing="-0.04em"
            textTransform="uppercase"
          >
            <Box as="span" color="brand.500">
              AZ
            </Box>
            ZY
          </Text>

          <HStack spacing={10} display={{ base: "none", md: "flex" }} flex="1" justify="center">
            {links.map((link) => (
              <Button
                key={link.id}
                as="a"
                href={`#${link.id}`}
                variant="ghost"
                color="white"
                fontFamily="var(--font-arimo)"
                fontSize={{ md: "1.05rem", lg: "1.1rem" }}
                fontWeight="500"
                _hover={{ color: "brand.100", bg: "transparent" }}
                _active={{ bg: "transparent" }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              as="a"
              href="#contact"
              variant="ghost"
              color="white"
              fontFamily="var(--font-arimo)"
              fontSize={{ md: "1.05rem", lg: "1.1rem" }}
              fontWeight="500"
              _hover={{ color: "brand.100", bg: "transparent" }}
              _active={{ bg: "transparent" }}
            >
              Contact
            </Button>
          </HStack>

          <HStack spacing={3} justify="flex-end" w={{ base: "auto", md: "100px" }}>
            <IconButton
              display={{ base: "inline-flex", md: "none" }}
              variant="outlineGlass"
              icon={<FiMenu />}
              aria-label="Open menu"
              onClick={onOpen}
            />
          </HStack>
        </Flex>
      </Container>

      <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="blackAlpha.600" />
        <DrawerContent bg="#161313" color="white">
          <DrawerBody pt={5}>
            <Flex justify="space-between" align="center" mb={6}>
              <Text fontFamily="heading" fontSize="xl" fontWeight="700">
                Menu
              </Text>
              <IconButton
                icon={<FiX />}
                aria-label="Close menu"
                onClick={onClose}
                variant="ghost"
              />
            </Flex>
            <Stack spacing={3}>
              {links.map((link) => (
                <Button
                  key={link.id}
                  as="a"
                  href={`#${link.id}`}
                  justifyContent="flex-start"
                  variant="subtleGhost"
                  onClick={onClose}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                as="a"
                href="#contact"
                justifyContent="flex-start"
                variant="subtleGhost"
                onClick={onClose}
              >
                Contact
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
