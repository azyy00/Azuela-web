import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiAward, FiExternalLink, FiEye } from "react-icons/fi";
import { certificates } from "../data/portfolio";
import datacampLogo from "../../datacamp.png";

function CertificatePreviewFrame({ certificate }) {
  return (
    <Box
      rounded="22px"
      overflow="hidden"
      border="1px solid rgba(255,255,255,0.1)"
      bg="rgba(12,10,10,0.9)"
      h={{ base: "190px", md: "210px" }}
      position="relative"
    >
      <Box
        position="absolute"
        insetX={0}
        top={0}
        h="1px"
        bgGradient="linear(to-r, transparent, rgba(255,59,48,0.72), transparent)"
        zIndex={1}
      />

      <Box
        as="iframe"
        title={`${certificate.title} preview`}
        src={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
        w="full"
        h="full"
        border="0"
        pointerEvents="none"
        bg="white"
      />
    </Box>
  );
}

function CertificateCard({ certificate, index, onPreview }) {
  return (
    <Box
      rounded="28px"
      border="1px solid rgba(255,255,255,0.1)"
      bg="linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))"
      boxShadow="0 22px 56px rgba(0,0,0,0.22)"
      overflow="hidden"
      position="relative"
      transition="all 0.2s ease"
      _hover={{
        transform: "translateY(-4px)",
        borderColor: "rgba(255,59,48,0.22)",
      }}
    >
      <Box
        position="absolute"
        insetX={0}
        top={0}
        h="1px"
        bgGradient="linear(to-r, transparent, rgba(255,59,48,0.82), transparent)"
      />

      <Stack spacing={5} p={{ base: 5, md: 5.5 }}>
        <HStack justify="space-between" align="flex-start">
          <Box
            w="42px"
            h="42px"
            rounded="18px"
            display="grid"
            placeItems="center"
            bg="rgba(255,59,48,0.08)"
            border="1px solid rgba(255,255,255,0.1)"
            color="#ff8f87"
          >
            <FiAward size={16} />
          </Box>

          <Text
            fontFamily="var(--font-hk-modular)"
            fontSize="0.72rem"
            letterSpacing="0.14em"
            color="rgba(145,150,177,0.5)"
          >
            {String(index + 1).padStart(2, "0")}
          </Text>
        </HStack>

        <CertificatePreviewFrame certificate={certificate} />

        <Stack spacing={3}>
          <Badge
            alignSelf="flex-start"
            px={3}
            py={1.5}
            rounded="full"
            bg="rgba(255,255,255,0.06)"
            border="1px solid rgba(255,255,255,0.12)"
            color="#ff8f87"
            fontSize="0.64rem"
            letterSpacing="0.14em"
            textTransform="uppercase"
          >
            {certificate.category}
          </Badge>

          <Text
            fontFamily="var(--font-hk-modular)"
            fontSize={{ base: "1.1rem", md: "1.18rem" }}
            lineHeight={1.05}
            letterSpacing="-0.04em"
            color="white"
          >
            {certificate.title}
          </Text>

          <Text
            color="rgba(255,255,255,0.72)"
            fontSize={{ base: "0.9rem", md: "0.94rem" }}
            lineHeight="1.7"
          >
            {certificate.summary}
          </Text>
        </Stack>

        <HStack justify="space-between" align="center" pt={1}>
          <Button
            leftIcon={<FiEye />}
            variant="accent"
            size="sm"
            rounded="full"
            px={4}
            onClick={() => onPreview(certificate)}
          >
            Preview
          </Button>

          <Button
            as="a"
            href={certificate.file}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="sm"
            color="rgba(255,255,255,0.84)"
            rightIcon={<FiExternalLink />}
            _hover={{ bg: "transparent", color: "white" }}
          >
            Open
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
}

function CertificatesSection() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <Box
      as="section"
      id="certificates"
      py={{ base: 20, md: 24 }}
      scrollMarginTop="7rem"
      bg="#171312"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        background="radial-gradient(circle at 18% 16%, rgba(255,59,48,0.12), transparent 18%), radial-gradient(circle at 80% 14%, rgba(255,255,255,0.05), transparent 16%)"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack spacing={{ base: 5, md: 6 }} align="center" textAlign="center" maxW="2xl" mx="auto">
          <Badge
            px={5}
            py={2.5}
            rounded="full"
            bg="rgba(255,59,48,0.08)"
            border="1px solid rgba(255,59,48,0.25)"
            color="#ff3b30"
            fontFamily="var(--font-hk-modular)"
            fontSize="0.72rem"
            letterSpacing="0.18em"
            textTransform="uppercase"
          >
            Certificates
          </Badge>

          <Text
            fontFamily="var(--font-hk-modular)"
            fontSize={{ base: "3rem", md: "4.3rem", xl: "5rem" }}
            lineHeight={0.92}
            letterSpacing="-0.06em"
            color="white"
          >
            My milestone
            <br />
            <Box as="span" color="#ff3b30">
              Achievements
            </Box>
          </Text>
        </Stack>

        <Box
          mt={{ base: 10, md: 12 }}
          rounded={{ base: "22px", md: "24px" }}
          border="1px solid rgba(255,255,255,0.1)"
          bg="rgba(255,255,255,0.02)"
          boxShadow="0 12px 36px rgba(0,0,0,0.14)"
          overflow="hidden"
          position="relative"
        >
          <Box
            position="absolute"
            insetX={0}
            top={0}
            h="1px"
            bg="rgba(255,59,48,0.5)"
          />

          {/* Top-right year */}
          <Box
            position="absolute"
            top={{ base: 4, md: 5 }}
            right={{ base: 4, md: 6 }}
            zIndex={2}
            textAlign="right"
          >
            <Text
              fontFamily="var(--font-hk-modular)"
              fontSize={{ base: "1.15rem", md: "1.45rem" }}
              lineHeight={1}
              letterSpacing="-0.05em"
              color="rgba(255,255,255,0.82)"
            >
              2025
            </Text>
          </Box>

          {/* Bottom-right XP */}
          <Box
            position="absolute"
            bottom={{ base: 4, md: 6 }}
            right={{ base: 4, md: 6 }}
            zIndex={2}
            textAlign="right"
          >
            <Text
              fontFamily="var(--font-hk-modular)"
              fontSize={{ base: "1.6rem", md: "2rem" }}
              lineHeight={0.95}
              letterSpacing="-0.06em"
              color="#ff3b30"
            >
              37K
            </Text>
            <Text
              mt={1}
              color="#ff3b30"
              fontSize="0.62rem"
              letterSpacing="0.16em"
              textTransform="uppercase"
            >
              Points Earned
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: "300px 1fr" }} spacing={0}>
            <Box
              p={{ base: 5, md: 6 }}
              borderRight={{ base: "none", lg: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Stack spacing={4} justify="center" h="full">
                <HStack spacing={4} align="center">
                  <Box
                    rounded="16px"
                    bg="#19e56f"
                    px={{ base: 3.5, md: 4 }}
                    py={{ base: 2.5, md: 3 }}
                  >
                    <Image
                      src={datacampLogo}
                      alt="Datacamp"
                      w={{ base: "76px", md: "84px" }}
                      h="auto"
                      objectFit="contain"
                    />
                  </Box>

                  <Text
                    fontFamily="var(--font-arimo)"
                    fontSize={{ base: "1.18rem", md: "1.28rem" }}
                    color="white"
                  >
                    Datacamp{" "}
                    <Box as="span" color="#ff3b30" fontWeight="700">
                      Scholar
                    </Box>
                  </Text>
                </HStack>
              </Stack>
            </Box>

            <Stack
              justify="center"
              spacing={3.5}
              p={{ base: 5, md: 6 }}
              pr={{ base: 5, md: 32 }}
              pt={{ base: 16, md: 8 }}
              pb={{ base: 16, md: 10 }}
            >
              <Text
                fontFamily="var(--font-arimo)"
                fontSize={{ base: "1.28rem", md: "1.55rem", lg: "1.7rem" }}
                lineHeight={1.1}
                fontWeight="700"
                color="white"
              >
                Datacamp Scholar Achievement
              </Text>

              <Stack as="ul" spacing={2.5} pl={5} color="rgba(255,255,255,0.74)">
                <Text as="li" fontSize={{ base: "0.88rem", md: "0.92rem" }} lineHeight="1.7">
                  Earned <Box as="span" color="#ff3b30" fontWeight="700">37K XP</Box> through
                  consistent hands-on learning in 2025.
                </Text>
                <Text as="li" fontSize={{ base: "0.88rem", md: "0.92rem" }} lineHeight="1.7">
                  Strengthened data, SQL, Python, and technical problem-solving foundations
                  through guided coursework.
                </Text>
              </Stack>

              <HStack spacing={2.5} flexWrap="wrap">
                {["Datacamp Scholar", "37K XP", "Python", "SQL", "Analytics"].map((tag) => (
                  <Badge
                    key={tag}
                    px={2.5}
                    py={1}
                    rounded="8px"
                    bg="rgba(255,255,255,0.04)"
                    border="1px solid rgba(255,255,255,0.1)"
                    color="rgba(255,255,255,0.82)"
                    fontSize="0.56rem"
                    letterSpacing="0.11em"
                    textTransform="uppercase"
                  >
                    {tag}
                  </Badge>
                ))}
              </HStack>
            </Stack>
          </SimpleGrid>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6} mt={{ base: 10, md: 12 }}>
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
              index={index}
              onPreview={setActiveCertificate}
            />
          ))}
        </SimpleGrid>
      </Container>

      <Modal
        isOpen={Boolean(activeCertificate)}
        onClose={() => setActiveCertificate(null)}
        size="6xl"
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="blackAlpha.760" backdropFilter="blur(10px)" />
        <ModalContent
          bg="#130f10"
          color="white"
          rounded="3xl"
          overflow="hidden"
          border="1px solid rgba(255,255,255,0.08)"
        >
          <ModalHeader>
            <Stack spacing={1}>
              <Text color="#ff3b30" fontSize="sm" textTransform="uppercase" letterSpacing="0.16em">
                Certificate Preview
              </Text>
              <Text>{activeCertificate?.title}</Text>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <HStack justify="space-between" align="center" mb={4} flexWrap="wrap" gap={3}>
              <Text color="rgba(255,255,255,0.68)">
                If the preview does not load in your browser, open the PDF directly.
              </Text>
              <Button
                as="a"
                href={activeCertificate?.file}
                target="_blank"
                rel="noreferrer"
                variant="accent"
                size="sm"
              >
                Open Full Certificate
              </Button>
            </HStack>
            <Box
              rounded="2xl"
              overflow="hidden"
              border="1px solid rgba(255,255,255,0.12)"
              bg="black"
              boxShadow="0 24px 64px rgba(0,0,0,0.28)"
            >
              {activeCertificate ? (
                <Box
                  as="iframe"
                  title={activeCertificate.title}
                  src={activeCertificate.file}
                  w="full"
                  h={{ base: "65vh", md: "75vh" }}
                  border="0"
                />
              ) : null}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CertificatesSection;