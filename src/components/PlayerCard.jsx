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
    Badge,
} from "@mantine/core";
import {
    IconSword,
    IconHeart,
    IconBolt,
    IconUser,
    IconFileZip,
    IconEye,
    IconTrash,
    IconDots,
} from "@tabler/icons-react";
import DisplayStat from "./DisplayStat";
import { getUrl } from "../script/pocketbase";

const PlayerCard = ({
    player: { name, avatar },
    player,
    data: { health, attack, defense, action, type },
    buffs,
}) => {
    return (
        <Flex>
            <Card shadow="sm" radius="md" w={250} h withBorder>
                <Card.Section inheritPadding py="xs">
                    <Group position="apart">
                        <Text weight={500}>{name}</Text>
                        <Menu withinPortal position="bottom-end" shadow="sm">
                            <Menu.Target>
                                <ActionIcon>
                                    <IconDots />
                                </ActionIcon>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Flex gap={4} direction={"column"} w={144}>
                                    {player.tags ? (
                                        <Badge
                                            color={player.expand?.tags?.theme}
                                            size="xl"
                                            variant="light"
                                            fullWidth
                                        >
                                            {player.expand?.tags?.name}
                                        </Badge>
                                    ) : (
                                        <></>
                                    )}
                                    {player.rarity ? (
                                        <Badge
                                            color={player.expand?.rarity?.color}
                                            size="xl"
                                            variant="light"
                                            fullWidth
                                        >
                                            {player.expand?.rarity?.name}
                                        </Badge>
                                    ) : (
                                        <></>
                                    )}
                                </Flex>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Card.Section>
                <Card.Section>
                    <Image
                        w={"160px"}
                        fit="cover"
                        src={getUrl(player, avatar)}
                    />
                </Card.Section>

                <Card.Section>
                    <Flex gap={20} align={"start"} justify={"center"}>
                        <DisplayStat
                            label="Attack"
                            icon={<IconSword />}
                            value={attack}
                        />
                        <DisplayStat
                            label="Health"
                            icon={<IconHeart />}
                            value={health}
                        />
                        <DisplayStat
                            label="Stamina"
                            icon={<IconBolt />}
                            value={""}
                        />
                        <DisplayStat
                            label="Type"
                            icon={<IconUser />}
                            value={type}
                        />
                    </Flex>
                </Card.Section>
            </Card>
            {buffs ? (
                <>
                    <SimpleGrid cols={3}>
                        {buffs.map((image) => (
                            <></>
                        ))}
                    </SimpleGrid>
                </>
            ) : (
                <></>
            )}
        </Flex>
    );
};

export default PlayerCard;
// Je suis un aspi-fion de lumière
// https://mantine.dev/core/card/
