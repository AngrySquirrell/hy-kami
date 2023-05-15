import React from "react";
import EnemyCard from "./EnemyCard";
import { Flex } from "@mantine/core";
import pb, { getUrl } from "../script/pocketbase";

const EnemyArea = ({ enemies }) => {
    return (
        <Flex gap={8} py={16 + 64}>
            {enemies.map((el, id) => {
                let data = {
                    health: el.health,
                    attack: el.attack,
                    defense: el.defense,
                };
                return <EnemyCard key={id} data={data} enemy={el} />;
            })}
        </Flex>
    );
};

export default EnemyArea;
