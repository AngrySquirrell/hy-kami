import React, { useEffect, useState } from "react";
import EnemyArea from "./EnemyArea";
import PlayerArea from "./PlayerArea";
import pb from "../script/pocketbase";
import { Flex } from "@mantine/core";

const GameBoard = () => {
    const [enemiesData, setEnemiesData] = useState([]);
    const [enemies, setEnemies] = useState([]);
    const [players, setPlayers] = useState([]);

    const fetchPB = async (collection, state) => {
        try {
            const records = await pb
                .collection(collection)
                .getFullList({ expand: "tags, rarity" });
            console.log(records);
            state(records);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchPB("hk_characters", setPlayers);
        fetchPB("hk_enemies", setEnemiesData);
    }, []);

    const getRandomEnemies = (enemiesNumber) => {
        let newEnemies = [];
        for (let i = 0; i < enemiesNumber; i++) {
            newEnemies.push(enemiesData[random(enemiesData.length)]);
        }
        setEnemies(newEnemies);
    };

    const random = (max) => {
        return Math.floor(Math.random() * max);
    };

    return (
        <Flex
            direction={"column"}
            h={"100vh"}
            w={"100vw"}
            justify={"space-between"}
            align={"center"}
            sx={{ boxSizing: "border-box" }}
        >
            <EnemyArea enemies={enemiesData} />
            <PlayerArea players={players} />
        </Flex>
    );
};

export default GameBoard;
