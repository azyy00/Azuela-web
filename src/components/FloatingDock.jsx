import { IconButton, Tooltip, VStack } from "@chakra-ui/react";
import { FiAward, FiBriefcase, FiLayers } from "react-icons/fi";

const dockItems = [
  { id: "projects", label: "Projects", icon: FiBriefcase },
  { id: "skills", label: "Skills", icon: FiLayers },
  { id: "certificates", label: "Certificates", icon: FiAward },
];

function FloatingDock() {
  return (
    <VStack
      position="fixed"
      right={{ base: 4, lg: 6 }}
      top="50%"
      transform="translateY(-50%)"
      spacing={3}
      zIndex="900"
      display={{ base: "none", lg: "flex" }}
    >
      {dockItems.map((item) => (
        <Tooltip key={item.id} label={item.label} placement="left" hasArrow>
          <IconButton
            as="a"
            href={`#${item.id}`}
            aria-label={item.label}
            icon={<item.icon />}
            size="lg"
            rounded="full"
            variant="outlineGlass"
            bg="rgba(255, 255, 255, 0.08)"
            borderColor="whiteAlpha.200"
          />
        </Tooltip>
      ))}
    </VStack>
  );
}

export default FloatingDock;
