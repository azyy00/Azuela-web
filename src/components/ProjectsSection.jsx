import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolio";

function AttendanceMockup() {
  return (
    <Box
      h="full"
      bg="linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
      p={{ base: 3.5, md: 4 }}
    >
      <Box
        px={4}
        py={3}
        rounded="xl"
        bg="#8c1712"
        color="white"
        fontFamily="var(--font-hk-modular)"
        fontSize={{ base: "0.88rem", md: "0.94rem" }}
        textTransform="uppercase"
        letterSpacing="0.14em"
        textAlign="center"
      >
        Attendance Monitoring
      </Box>

      <SimpleGrid columns={2} spacing={3} mt={3}>
        <Box p={3.5} rounded="xl" bg="rgba(255,255,255,0.06)" border="1px solid rgba(255,255,255,0.1)">
          <Text fontSize="0.64rem" color="rgba(255,255,255,0.56)" textTransform="uppercase" letterSpacing="0.2em">
            Checked In
          </Text>
          <Text mt={1.5} fontSize={{ base: "1.25rem", md: "1.45rem" }} fontFamily="var(--font-hk-modular)" color="white">
            90
          </Text>
        </Box>
        <Box p={3.5} rounded="xl" bg="rgba(255,255,255,0.06)" border="1px solid rgba(255,255,255,0.1)">
          <Text fontSize="0.64rem" color="rgba(255,255,255,0.56)" textTransform="uppercase" letterSpacing="0.2em">
            Inside
          </Text>
          <Text mt={1.5} fontSize={{ base: "1.25rem", md: "1.45rem" }} fontFamily="var(--font-hk-modular)" color="white">
            0
          </Text>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={3} mt={3}>
        <Stack spacing={2.5}>
          {["Study", "Research", "Borrow Books"].map((item) => (
            <Box
              key={item}
              px={3}
              py={2.5}
              rounded="lg"
              bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.09)"
              textAlign="center"
              color="rgba(255,255,255,0.84)"
              fontSize="0.8rem"
              fontWeight="700"
            >
              {item}
            </Box>
          ))}
        </Stack>

        <Box
          p={3.5}
          rounded="xl"
          bg="rgba(255,255,255,0.05)"
          border="1px solid rgba(255,255,255,0.1)"
        >
          <Text fontSize="0.72rem" color="rgba(255,255,255,0.72)" fontWeight="700" mb={2.5}>
            Hourly Check-In
          </Text>
          <Stack spacing={2}>
            {[35, 62, 48].map((width, index) => (
              <Box key={width + index}>
                <Box h="6px" rounded="full" bg="rgba(255,255,255,0.08)" overflow="hidden">
                  <Box h="full" w={`${width}%`} rounded="full" bgGradient="linear(to-r, #ff8177, #ff3b30)" />
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

function ProjectPreview({ project }) {
  return (
    <Box
      rounded="2xl"
      overflow="hidden"
      border="1px solid rgba(255,255,255,0.1)"
      bg="rgba(255,255,255,0.03)"
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt}
          w="full"
          h={{ base: "180px", md: "210px", lg: "220px" }}
          objectFit="cover"
          objectPosition="top"
        />
      ) : (
        <Box h={{ base: "180px", md: "210px", lg: "220px" }}>
          <AttendanceMockup />
        </Box>
      )}
    </Box>
  );
}

function ProjectCard({ project }) {
  return (
    <Box
      rounded="3xl"
      border="1px solid rgba(255,255,255,0.1)"
      bg="linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
      boxShadow="0 24px 54px rgba(0,0,0,0.22)"
      overflow="hidden"
      transition="all 0.22s ease"
      _hover={{
        transform: "translateY(-5px)",
        borderColor: "rgba(255,59,48,0.26)",
        boxShadow: "0 28px 64px rgba(0,0,0,0.28)",
      }}
    >
      <Box p={{ base: 4, md: 5 }}>
        <ProjectPreview project={project} />
      </Box>

      <Stack spacing={4} px={{ base: 4, md: 5 }} pb={{ base: 4, md: 5 }}>
        <HStack justify="space-between" align="center">
          <Badge
            px={3}
            py={1.5}
            rounded="full"
            bg="rgba(255,59,48,0.12)"
            border="1px solid rgba(255,59,48,0.18)"
            color="#ff3b30"
            fontSize="0.64rem"
            letterSpacing="0.14em"
            textTransform="uppercase"
          >
            Featured Build
          </Badge>

          <HStack spacing={2} color="rgba(255,255,255,0.44)">
            <Box fontSize="0.95rem">
              <FiExternalLink />
            </Box>
          </HStack>
        </HStack>

        <Box>
          <Text
            color="#ff3b30"
            textTransform="uppercase"
            letterSpacing="0.16em"
            fontSize="0.68rem"
            fontFamily="var(--font-hk-modular)"
            mb={1.5}
          >
            {project.subtitle}
          </Text>
          <Text
            fontFamily="var(--font-hk-modular)"
            fontSize={{ base: "1.25rem", md: "1.45rem" }}
            letterSpacing="-0.04em"
            color="white"
          >
            {project.title}
          </Text>
        </Box>

        <Text
          color="rgba(255,255,255,0.74)"
          fontSize={{ base: "0.9rem", md: "0.95rem" }}
          lineHeight="1.7"
        >
          {project.description}
        </Text>

        <Wrap spacing={2.5}>
          {project.tech.map((item) => (
            <WrapItem key={item}>
              <Badge
                px={2.5}
                py={1.5}
                rounded="full"
                bg="rgba(255,255,255,0.07)"
                border="1px solid rgba(255,255,255,0.12)"
                fontSize="0.68rem"
                color="rgba(255,255,255,0.82)"
                textTransform="none"
              >
                {item}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>

        <Stack spacing={2.5}>
          {project.highlights.map((point) => (
            <HStack key={point} align="flex-start" spacing={3}>
              <Box
                mt="7px"
                w="16px"
                h="16px"
                display="grid"
                placeItems="center"
                color="#ff3b30"
                flexShrink={0}
              >
                <FiArrowRight size="0.9rem" />
              </Box>
              <Text color="rgba(255,255,255,0.72)" fontSize={{ base: "0.88rem", md: "0.92rem" }} lineHeight="1.7">
                {point}
              </Text>
            </HStack>
          ))}
        </Stack>

        <HStack justify="space-between" pt={1}>
          <Button
            as="a"
            href="#contact"
            size="sm"
            variant="accent"
            rounded="14px"
            px={4}
            h="40px"
            rightIcon={<FiArrowRight />}
          >
            View Details
          </Button>

          <HStack spacing={3} color="rgba(255,255,255,0.42)">
            <Box fontSize="1rem">
              <FiExternalLink />
            </Box>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}

function ProjectsSection() {
  return (
    <Box
      as="section"
      id="projects"
      py={{ base: 20, md: 24 }}
      scrollMarginTop="7rem"
      bg="#171312"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        background="radial-gradient(circle at 18% 14%, rgba(255,59,48,0.12), transparent 20%), radial-gradient(circle at 82% 12%, rgba(255,255,255,0.05), transparent 18%)"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack spacing={4} align="center" textAlign="center" maxW="3xl" mx="auto">
          <Text
            fontFamily="var(--font-hk-modular)"
            fontSize={{ base: "0.82rem", md: "0.9rem" }}
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.62)"
          >
            Selected Work
          </Text>

          <Text
            fontFamily="var(--font-hk-modular)"
            fontSize={{ base: "2.5rem", md: "3.4rem", lg: "4rem" }}
            lineHeight={0.96}
            letterSpacing="-0.05em"
            color="white"
          >
            Featured{" "}
            <Box as="span" color="#ff3b30">
              Projects
            </Box>
          </Text>

          <Text
            color="rgba(255,255,255,0.72)"
            fontSize={{ base: "0.96rem", md: "1.02rem" }}
            lineHeight="1.8"
            maxW="2xl"
          >
            Compact case-study cards for the interfaces I designed around real academic and
            administrative workflows.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 6, xl: 7 }} mt={{ base: 10, md: 12 }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default ProjectsSection;
