import React from "react";
import PlayerCard from "./PlayerCard";
import pb from "../script/pocketbase";
import { Flex } from "@mantine/core";

const PlayerArea = ({ players }) => {
    return (
        <Flex gap={8} py={16}>
            {players.map((el, id) => {
                let data = {
                    health: el.health,
                    attack: el.attack,
                    defense: el.defense,
                };
                return (
                    <PlayerCard
                        key={id}
                        data={data}
                        player={el}
                        tag={el.expand.tags}
                        rarity={el.expand.rarity}
                    />
                );
            })}
        </Flex>
    );
};

export default PlayerArea;
