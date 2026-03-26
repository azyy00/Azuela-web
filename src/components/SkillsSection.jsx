import {
  Badge,
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaDatabase } from "react-icons/fa";
import {
  SiBootstrap,
  SiCanva,
  SiChakraui,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
} from "react-icons/si";

const skillNodes = [
  { name: "HTML5", icon: SiHtml5, color: "#ff7a3d", top: "10%", left: "49%", size: 36, label: false, delay: "0s" },
  { name: "CSS3", icon: SiCss, color: "#2d9cff", top: "18%", left: "32%", size: 34, label: false, delay: "0.8s" },
  { name: "JavaScript", icon: SiJavascript, color: "#f4d03f", top: "21%", left: "70%", size: 34, label: false, delay: "1.6s" },
  { name: "React", icon: SiReact, color: "#6be7ff", top: "33%", left: "61%", size: 48, label: true, delay: "0.2s" },
  { name: "Python", icon: SiPython, color: "#4ca4ff", top: "48%", left: "22%", size: 48, label: true, delay: "1.2s" },
  { name: "MySQL", icon: SiMysql, color: "#3d71ff", top: "62%", left: "77%", size: 42, label: false, delay: "0.5s" },
  { name: "Git", icon: SiGit, color: "#ff5e3a", top: "78%", left: "49%", size: 42, label: true, delay: "1.8s" },
  { name: "GitHub", icon: SiGithub, color: "#d9d9d9", top: "74%", left: "27%", size: 38, label: false, delay: "0.7s" },
  { name: "Chakra UI", icon: SiChakraui, color: "#6ef2ff", top: "50%", left: "53%", size: 34, label: false, delay: "1.4s" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#b884ff", top: "28%", left: "15%", size: 34, label: false, delay: "0.9s" },
  { name: "Canva", icon: SiCanva, color: "#57e1ff", top: "66%", left: "60%", size: 32, label: false, delay: "1.1s" },
  { name: "Figma", icon: SiFigma, color: "#ff8f7a", top: "78%", left: "74%", size: 34, label: false, delay: "1.9s" },
  { name: "SQL", icon: FaDatabase, color: "#8bb8ff", top: "42%", left: "82%", size: 34, label: false, delay: "0.4s" },
];

const skillClusters = [
  {
    title: "Frontend Orbit",
    copy: "React, HTML, CSS, JavaScript, Chakra UI, and Bootstrap for responsive interfaces.",
  },
  {
    title: "Design Layer",
    copy: "Canva and Figma support my visual direction, layout thinking, and polished presentation.",
  },
  {
    title: "Data Core",
    copy: "Python, SQL, MySQL, Git, and GitHub strengthen the technical side of my workflow.",
  },
];

function SkillNode({ skill }) {
  const Icon = skill.icon;

  return (
    <Box
      position="absolute"
      top={skill.top}
      left={skill.left}
      transform="translate(-50%, -50%)"
      zIndex={3}
      pointerEvents="none"
    >
      <Stack align="center" spacing={1}>
        <Box
          className="skill-node-bob"
          style={{ animationDelay: skill.delay }}
          display="grid"
          placeItems="center"
          w={{ base: "42px", md: "48px", lg: `${Math.max(skill.size + 14, 46)}px` }}
          h={{ base: "42px", md: "48px", lg: `${Math.max(skill.size + 14, 46)}px` }}
          rounded="full"
          bg="rgba(26, 18, 18, 0.58)"
          border="1px solid rgba(255, 82, 70, 0.16)"
          boxShadow="0 12px 30px rgba(0,0,0,0.28)"
          backdropFilter="blur(10px)"
        >
          <Icon size={skill.size} color={skill.color} />
        </Box>

        {skill.label ? (
          <Text
            display={{ base: "none", md: "block" }}
            fontFamily="var(--font-hk-modular)"
            fontSize={{ md: "0.72rem", lg: "0.78rem" }}
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.62)"
            textAlign="center"
          >
            {skill.name}
          </Text>
        ) : null}
      </Stack>
    </Box>
  );
}

function SkillsSection() {
  return (
    <Box
      as="section"
      id="skills"
      py={{ base: 20, md: 24 }}
      scrollMarginTop="7rem"
      bg="#171312"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        className="skill-stars"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack align="center" spacing={{ base: 5, md: 6 }}>
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
            Tech Stack
          </Badge>

          <Text
            fontFamily="var(--font-hk-modular)"
            fontSize={{ base: "3rem", md: "4.6rem", lg: "5.3rem" }}
            lineHeight={0.95}
            letterSpacing="-0.06em"
            color="white"
            textAlign="center"
          >
            My{" "}
            <Box
              as="span"
              color="#ff3b30"
            >
              Skills
            </Box>
          </Text>

          <Text
            maxW="760px"
            textAlign="center"
            color="rgba(255,255,255,0.72)"
            fontSize={{ base: "0.98rem", md: "1.05rem" }}
            lineHeight="1.75"
            fontFamily="var(--font-arimo)"
          >
            A holographic view of the tools I use to design interfaces, build modern frontend
            experiences, and keep growing through practical development work.
          </Text>
        </Stack>

        <Box
          mt={{ base: 12, md: 14 }}
          position="relative"
          mx="auto"
          w={{ base: "100%", lg: "940px" }}
          minH={{ base: "460px", md: "620px", lg: "720px" }}
        >
          <Box
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            w={{ base: "310px", md: "470px", lg: "560px" }}
            h={{ base: "310px", md: "470px", lg: "560px" }}
            rounded="full"
            bg="radial-gradient(circle at 50% 46%, rgba(255, 94, 78, 0.12), rgba(110, 24, 20, 0.24) 36%, rgba(28, 18, 18, 0.95) 74%, rgba(12, 9, 9, 1) 100%)"
            boxShadow="0 40px 120px rgba(0,0,0,0.45)"
            className="skill-globe"
          >
            <Box
              position="absolute"
              inset="4%"
              rounded="full"
              border="1px solid rgba(255, 82, 70, 0.22)"
              className="skill-ring-spin"
            />
            <Box
              position="absolute"
              inset="10%"
              rounded="full"
              border="1px solid rgba(255, 255, 255, 0.12)"
              className="skill-ring-spin-reverse"
            />
            <Box
              position="absolute"
              inset="14%"
              rounded="full"
              border="1px solid rgba(255,255,255,0.07)"
            />

            <Box
              position="absolute"
              inset="8%"
              rounded="full"
              className="skill-globe-grid"
            />

            <Box
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              w="100%"
              h="30%"
              borderTop="1px solid rgba(255, 74, 64, 0.22)"
              borderBottom="1px solid rgba(255, 74, 64, 0.22)"
              rounded="full"
              opacity={0.8}
            />

            <Box
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%) rotate(90deg)"
              w="100%"
              h="30%"
              borderTop="1px solid rgba(255, 255, 255, 0.12)"
              borderBottom="1px solid rgba(255, 255, 255, 0.12)"
              rounded="full"
              opacity={0.7}
            />

            <Box
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              px={4}
              zIndex={2}
            >
              <Text
                fontFamily="var(--font-hk-modular)"
                fontSize={{ base: "0.72rem", md: "0.82rem" }}
                letterSpacing="0.22em"
                textTransform="uppercase"
                color="rgba(255,255,255,0.56)"
                mb={2}
              >
                Skill Orbit
              </Text>
              <Text
                fontFamily="var(--font-hk-modular)"
                fontSize={{ base: "1.6rem", md: "2.1rem", lg: "2.4rem" }}
                color="white"
                letterSpacing="-0.05em"
              >
                Frontend x Design x Data
              </Text>
            </Box>
          </Box>

          {skillNodes.map((skill) => (
            <SkillNode key={skill.name} skill={skill} />
          ))}
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={{ base: 6, md: 8 }}>
          {skillClusters.map((cluster) => (
            <Box
              key={cluster.title}
              className="glass-panel"
              p={{ base: 5, md: 5 }}
              rounded="24px"
              border="1px solid rgba(255,255,255,0.08)"
              bg="linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))"
              boxShadow="0 18px 40px rgba(0,0,0,0.22)"
            >
              <Text
                fontFamily="var(--font-hk-modular)"
                fontSize="0.82rem"
                letterSpacing="0.18em"
                textTransform="uppercase"
                color="#ff3b30"
                mb={2}
              >
                {cluster.title}
              </Text>
              <Text
                fontFamily="var(--font-arimo)"
                color="rgba(255,255,255,0.74)"
                fontSize={{ base: "0.92rem", md: "0.95rem" }}
                lineHeight="1.7"
              >
                {cluster.copy}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default SkillsSection;
