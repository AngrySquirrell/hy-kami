import "./App.css";
import Navbar from "./components/Navbar.jsx";
import GameBoard from "./components/GameBoard";
import { Flex } from "@mantine/core";

function App() {
    return (
        <>
            <Navbar />
            <GameBoard />
        </>
    );
}

export default App;
