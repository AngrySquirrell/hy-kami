import React from "react";
import {
    Flex,
    Card,
    Group,
    Text,
    Menu,
    ActionIcon,
    Image,
    SimpleGrid,
    ThemeIcon,
    Tooltip,
} from "@mantine/core";

const DisplayStat = ({ label, icon, value }) => {
    return (
        <Tooltip label={label}>
            <Flex direction={"column"} align={"center"}>
                <ThemeIcon variant="light">{icon}</ThemeIcon>
                <Text>{value}</Text>
            </Flex>
        </Tooltip>
    );
};

export default DisplayStat;
