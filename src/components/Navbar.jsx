import { Header, Flex, Avatar, Text } from "@mantine/core";
import React from "react";

const Navbar = () => {
    return (
        <>
            <Header height={64} fixed bg={"yellow"} sx={{ border: 0 }}>
                <Flex
                    w={"100%"}
                    h={"100%"}
                    justify={"space-around"}
                    align={"center"}
                >
                    <Text ta={"center"} fz={"xl"} fw={700}>
                        Hykami
                    </Text>
                    {/* {!auth.isValid ? (
                        <Button
                            variant="gradient"
                            gradient={{
                                from: "blue.6",
                                to: "orange.8",
                                deg: 120,
                            }}
                            onClick={open}
                        >
                            Se connecter
                        </Button>
                    ) : (
                        <Flex gap={8} align={"center"}>
                            <Avatar
                                src={getUrl(auth.model, auth.model?.avatar)}
                            />
                            <Text> {auth.model?.username}</Text>
                            <Button
                                variant="light"
                                color="red"
                                compact
                                onClick={() => pb.authStore.clear()}
                            >
                                X
                            </Button>
                        </Flex>
                    )} */}
                </Flex>
            </Header>
        </>
    );
};

export default Navbar;
