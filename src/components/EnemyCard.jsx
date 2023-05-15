import React from "react";
import { getUrl } from "../script/pocketbase";
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

const EnemyCard = ({
    enemy: { name, avatar },
    enemy,
    data: { health, attack, defense, action, type },
    buffs,
}) => {
    return (
        <Flex>
            <Card shadow="sm" radius="md" w={250} h={"100%"} withBorder>
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
                                    {enemy.tags ? (
                                        <Badge
                                            color={enemy.expand?.tags?.theme}
                                            size="xl"
                                            variant="light"
                                            fullWidth
                                        >
                                            {enemy.expand?.tags?.name}
                                        </Badge>
                                    ) : (
                                        <></>
                                    )}
                                    {enemy.rarity ? (
                                        <Badge
                                            color={enemy.expand?.rarity?.color}
                                            size="xl"
                                            variant="light"
                                            fullWidth
                                        >
                                            {enemy.expand?.rarity?.name}
                                        </Badge>
                                    ) : (
                                        <></>
                                    )}
                                </Flex>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Card.Section>
                <Flex
                    direction={"column"}
                    justify={"space-between"}
                    align={"center"}
                    w={"100%"}
                    gap={20}
                >
                    <Card.Section>
                        <Image src={getUrl(enemy, avatar)} />

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
                </Flex>
            </Card>
            {buffs ? (
                <>
                    <SimpleGrid cols={3}>
                        {buffs.map((image) => (
                            <Image src={image} key={image} radius="sm" />
                        ))}
                    </SimpleGrid>
                </>
            ) : (
                <></>
            )}
        </Flex>
    );
};

export default EnemyCard;
