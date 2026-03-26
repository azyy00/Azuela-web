import { Badge, Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaDatabase } from "react-icons/fa";
import {
  SiBootstrap,
  SiCanva,
  SiChakraui,
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#ff7a3d" },
  { name: "CSS3", icon: SiCss3, color: "#2d9cff" },
  { name: "JavaScript", icon: SiJavascript, color: "#f4d03f" },
  { name: "React", icon: SiReact, color: "#6be7ff" },
  { name: "Python", icon: SiPython, color: "#4ca4ff" },
  { name: "MySQL", icon: SiMysql, color: "#3d71ff" },
  { name: "Git", icon: SiGit, color: "#ff5e3a" },
  { name: "GitHub", icon: SiGithub, color: "#d9d9d9" },
  { name: "Chakra UI", icon: SiChakraui, color: "#6ef2ff" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#b884ff" },
  { name: "Canva", icon: SiCanva, color: "#57e1ff" },
  { name: "Figma", icon: SiFigma, color: "#ff8f7a" },
  { name: "SQL", icon: FaDatabase, color: "#8bb8ff" },
];

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <Box
      rounded="16px"
      border="1px solid rgba(255,255,255,0.1)"
      bg="rgba(255,255,255,0.04)"
      p={6}
      textAlign="center"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-8px)",
        borderColor: "rgba(255,59,48,0.4)",
        bg: "rgba(255,255,255,0.08)",
        boxShadow: "0 16px 40px rgba(255,59,48,0.15)",
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
    >
      <Box
        w="60px"
        h="60px"
        rounded="12px"
        display="grid"
        placeItems="center"
        bg="rgba(255,255,255,0.05)"
        border="1px solid rgba(255,255,255,0.1)"
      >
        <Icon size={36} color={skill.color} />
      </Box>

      <Text
        fontFamily="var(--font-hk-modular)"
        fontSize="0.9rem"
        fontWeight="600"
        letterSpacing="0.08em"
        textTransform="uppercase"
        color="rgba(255,255,255,0.88)"
      >
        {skill.name}
      </Text>
    </Box>
  );
}

function SkillsShowcase() {
  return (
    <Box
      as="section"
      id="skills-showcase"
      py={{ base: 16, md: 20, lg: 24 }}
      bg="#171312"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        background="radial-gradient(circle at 20% 40%, rgba(255,59,48,0.1), transparent 25%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.05), transparent 25%)"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack spacing={{ base: 8, md: 10 }} align="center" textAlign="center">
          <Stack spacing={4} maxW="2xl">
            <Badge
              px={4}
              py={2}
              rounded="full"
              bg="rgba(255,59,48,0.12)"
              border="1px solid rgba(255,59,48,0.25)"
              color="#ff3b30"
              fontFamily="var(--font-hk-modular)"
              fontSize="0.72rem"
              letterSpacing="0.18em"
              textTransform="uppercase"
              alignSelf="center"
            >
              Tech Arsenal
            </Badge>

            <Text
              fontFamily="var(--font-hk-modular)"
              fontSize={{ base: "2rem", md: "3rem", lg: "3.5rem" }}
              lineHeight={1}
              letterSpacing="-0.05em"
              color="white"
            >
              Skills &{" "}
              <Box as="span" color="#ff3b30">
                Tools
              </Box>
            </Text>

            <Text
              color="rgba(255,255,255,0.72)"
              fontSize={{ base: "0.96rem", md: "1rem" }}
              lineHeight="1.7"
            >
              A comprehensive collection of technologies, frameworks, and tools I use to build exceptional digital experiences.
            </Text>
          </Stack>

          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
            spacing={{ base: 4, md: 5, lg: 6 }}
            w="full"
          >
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </SimpleGrid>

          <Box
            maxW="3xl"
            p={{ base: 5, md: 6 }}
            rounded="20px"
            border="1px solid rgba(255,59,48,0.2)"
            bg="rgba(255,59,48,0.05)"
            mt={4}
          >
            <Text
              fontFamily="var(--font-arimo)"
              fontSize={{ base: "0.9rem", md: "0.95rem" }}
              color="rgba(255,255,255,0.8)"
              lineHeight="1.7"
            >
              Beyond these core technologies, I'm constantly learning and exploring new tools and frameworks to stay ahead of industry trends. Each skill represents practical experience and a commitment to excellence in my craft.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default SkillsShowcase;
