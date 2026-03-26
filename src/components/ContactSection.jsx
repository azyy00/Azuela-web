import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
  HStack,
  Link,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from "react-icons/fi";

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <Box
      as="section"
      id="contact"
      py={{ base: 20, md: 24 }}
      scrollMarginTop="7rem"
      bg="#171312"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack align="center" spacing={{ base: 6, md: 8 }} textAlign="center" mb={{ base: 12, md: 16 }}>
          <Badge
            px={4}
            py={2}
            rounded="full"
            bg="rgba(255,255,255,0.05)"
            border="1px solid rgba(255,255,255,0.1)"
            color="rgba(255,255,255,0.84)"
            fontFamily="var(--font-hk-modular)"
            letterSpacing="0.18em"
            textTransform="uppercase"
          >
            Get In Touch
          </Badge>

          <Text
            fontFamily="var(--font-hk-modular)"
            fontSize={{ base: "3rem", md: "4.6rem", lg: "5.3rem" }}
            lineHeight={0.95}
            letterSpacing="-0.06em"
            color="white"
          >
            Let's{" "}
            <Box
              as="span"
              bgGradient="linear(135deg, #ffffff 0%, #ff8d86 42%, #ff3b30 100%)"
              bgClip="text"
            >
              Connect
            </Box>
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} maxW="1200px" mx="auto">
          {/* Left Side - Contact Info in Terminal Style */}
          <Box
            rounded="16px"
            border="1px solid rgba(255,255,255,0.12)"
            bg="#0f0f0f"
            overflow="hidden"
            boxShadow="0 12px 40px rgba(0,0,0,0.4)"
            fontFamily="'Courier New', monospace"
            fontSize="0.9rem"
          >
            {/* Terminal Header */}
            <Box
              bg="#2d2d2d"
              p={3}
              borderBottom="1px solid rgba(255,255,255,0.08)"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <HStack spacing={2}>
                <Box w="12px" h="12px" rounded="full" bg="#ff5f57" />
                <Box w="12px" h="12px" rounded="full" bg="#ffbd2e" />
                <Box w="12px" h="12px" rounded="full" bg="#28c840" />
              </HStack>
              <Text fontSize="0.85rem" color="rgba(255,255,255,0.6)" ml="auto">
                contact_info.json
              </Text>
            </Box>

            {/* Terminal Content */}
            <Box p={6} lineHeight="1.8">
              <Text color="#a8ff60" mb={2}>
                {"{"}
              </Text>

              <Box pl={4}>
                <Text color="#61dafb">
                  <Box as="span" color="#ff8d86">
                    "status"
                  </Box>
                  : <Box as="span" color="#a8ff60">"open_to_work"</Box>,
                </Text>

                <Text color="#61dafb" mt={2}>
                  <Box as="span" color="#ff8d86">
                    "email"
                  </Box>
                  : <Box as="span" color="#a8ff60">"anthony.azuela,buenaflor@gmail.com"</Box>,
                </Text>

                <Text color="#61dafb" mt={2}>
                  <Box as="span" color="#ff8d86">
                    "socials"
                  </Box>
                  : {"{"}
                </Text>

                <Box pl={4}>
                  <Text color="#61dafb">
                    <Box as="span" color="#ff8d86">
                      "github"
                    </Box>
                    : <Box as="span" color="#a8ff60">"@github"</Box>,
                  </Text>

                  <Text color="#61dafb" mt={1}>
                    <Box as="span" color="#ff8d86">
                      "linkedin"
                    </Box>
                    : <Box as="span" color="#a8ff60">"@anthony-azuela"</Box>,
                  </Text>

                  <Text color="#61dafb" mt={1}>
                    <Box as="span" color="#ff8d86">
                      "twitter"
                    </Box>
                    : <Box as="span" color="#a8ff60">"@anthonyazuela"</Box>
                  </Text>
                </Box>

                <Text color="#61dafb">{"}"},</Text>

                <Text color="#61dafb" mt={2}>
                  <Box as="span" color="#ff8d86">
                    "phone"
                  </Box>
                  : <Box as="span" color="#a8ff60">"+63 966-698-2273"</Box>,
                </Text>

                <Text color="#61dafb" mt={2}>
                  <Box as="span" color="#ff8d86">
                    "location"
                  </Box>
                  : <Box as="span" color="#a8ff60">"Philippines"</Box>
                </Text>
              </Box>

              <Text color="#a8ff60" mt={4}>
                {"}"}
              </Text>

              <Text color="rgba(255,255,255,0.4)" mt={6} fontSize="0.8rem">
                // Waiting for connection...
              </Text>
            </Box>

            {/* Social Links */}
            <Box borderTop="1px solid rgba(255,255,255,0.08)" p={6}>
              <Text color="rgba(255,255,255,0.6)" fontSize="0.85rem" mb={4}>
                Follow me
              </Text>
              <HStack spacing={3}>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="44px"
                  h="44px"
                  rounded="10px"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid rgba(255,255,255,0.1)"
                  color="rgba(255,255,255,0.7)"
                  _hover={{
                    bg: "rgba(255,59,48,0.15)",
                    color: "#ff8d86",
                    borderColor: "rgba(255,59,48,0.4)",
                  }}
                  transition="all 0.2s ease"
                >
                  <FiGithub size={18} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/anthony-azuela-443652358"
                  target="_blank"
                  rel="noreferrer"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="44px"
                  h="44px"
                  rounded="10px"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid rgba(255,255,255,0.1)"
                  color="rgba(255,255,255,0.7)"
                  _hover={{
                    bg: "rgba(255,59,48,0.15)",
                    color: "#ff8d86",
                    borderColor: "rgba(255,59,48,0.4)",
                  }}
                  transition="all 0.2s ease"
                >
                  <FiLinkedin size={18} />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="44px"
                  h="44px"
                  rounded="10px"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid rgba(255,255,255,0.1)"
                  color="rgba(255,255,255,0.7)"
                  _hover={{
                    bg: "rgba(255,59,48,0.15)",
                    color: "#ff8d86",
                    borderColor: "rgba(255,59,48,0.4)",
                  }}
                  transition="all 0.2s ease"
                >
                  <FiTwitter size={18} />
                </Link>
              </HStack>
            </Box>
          </Box>

          {/* Right Side - Contact Form in Terminal Style */}
          <Box
            rounded="16px"
            border="1px solid rgba(255,255,255,0.12)"
            bg="#0f0f0f"
            overflow="hidden"
            boxShadow="0 12px 40px rgba(0,0,0,0.4)"
          >
            {/* Terminal Header */}
            <Box
              bg="#2d2d2d"
              p={3}
              borderBottom="1px solid rgba(255,255,255,0.08)"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <HStack spacing={2}>
                <Box w="12px" h="12px" rounded="full" bg="#ff5f57" />
                <Box w="12px" h="12px" rounded="full" bg="#ffbd2e" />
                <Box w="12px" h="12px" rounded="full" bg="#28c840" />
              </HStack>
              <Text fontSize="0.85rem" color="rgba(255,255,255,0.6)" ml="auto">
                <Box as="span" color="#a8ff60">
                  ~/
                </Box>
                sendMessage.ts
              </Text>
            </Box>

            {/* Form Content */}
            <Box p={6} fontFamily="'Courier New', monospace" fontSize="0.9rem">
              <form onSubmit={handleSubmit}>
                <VStack spacing={5}>
                  <Text color="#a8ff60">
                    // Run this script to send a message
                  </Text>

                  <Text color="#61dafb">
                    <Box as="span" color="#ff8d86">const</Box> send = <Box as="span" color="#ff8d86">async</Box> () =&gt; {"{"}
                  </Text>

                  <FormControl pl={6}>
                    <Text color="#61dafb" mb={2}>
                      <Box as="span" color="#ff8d86">const</Box> name = <Box as="span" color="#a8ff60">"</Box>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        bg="transparent"
                        border="none"
                        color="white"
                        padding="0"
                        height="auto"
                        fontSize="0.9rem"
                        fontFamily="'Courier New', monospace"
                        _placeholder={{ color: "rgba(255,255,255,0.3)" }}
                        _focus={{ boxShadow: "none" }}
                        display="inline"
                        width="auto"
                        required
                      />
                      <Box as="span" color="#a8ff60">"</Box>;
                    </Text>
                  </FormControl>

                  <FormControl pl={6}>
                    <Text color="#61dafb" mb={2}>
                      <Box as="span" color="#ff8d86">const</Box> email = <Box as="span" color="#a8ff60">"</Box>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        bg="transparent"
                        border="none"
                        color="white"
                        padding="0"
                        height="auto"
                        fontSize="0.9rem"
                        fontFamily="'Courier New', monospace"
                        _placeholder={{ color: "rgba(255,255,255,0.3)" }}
                        _focus={{ boxShadow: "none" }}
                        display="inline"
                        width="auto"
                        required
                      />
                      <Box as="span" color="#a8ff60">"</Box>;
                    </Text>
                  </FormControl>

                  <Text color="#61dafb" pl={6}>
                    <Box as="span" color="#ff8d86">await</Box> api.submit({"{"}
                  </Text>

                  <FormControl pl={12}>
                    <Text color="#61dafb" mb={2}>
                      name, email,
                    </Text>
                    <Text color="#61dafb">
                      message : <Box as="span" color="#a8ff60">"</Box>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here ..."
                        bg="transparent"
                        border="none"
                        color="white"
                        padding="0"
                        minH="80px"
                        resize="none"
                        fontSize="0.9rem"
                        fontFamily="'Courier New', monospace"
                        _placeholder={{ color: "rgba(255,255,255,0.3)" }}
                        _focus={{ boxShadow: "none" }}
                        display="inline"
                        required
                      />
                      <Box as="span" color="#a8ff60">"</Box>
                    </Text>
                  </FormControl>

                  <Text color="#61dafb" pl={6}>
                    {"}"});
                  </Text>

                  <Text color="#61dafb">
                    {"}"}
                  </Text>

                  <Button
                    type="submit"
                    isLoading={loading}
                    bg="#ff3b30"
                    color="white"
                    rounded="8px"
                    fontFamily="'Courier New', monospace"
                    fontSize="0.85rem"
                    fontWeight="700"
                    py={2.5}
                    px={5}
                    mt={4}
                    width="auto"
                    _hover={{ transform: "translateY(-2px)", boxShadow: "0 8px 20px rgba(255,59,48,0.4)" }}
                    transition="all 0.2s ease"
                  >
                    ▶ RUN SCRIPT
                  </Button>
                </VStack>
              </form>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default ContactSection;
