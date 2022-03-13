import { useState } from "react";
import styled from "styled-components";
import Results from "./components/Results";
import Details from "./components/Details";

const Container = styled("div")`
  display: flex;
`;

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<null | string>(null);

  return (
    <Container>
      <Results setSelectedPokemon={setSelectedPokemon} />
      <Details selectedPokemon={selectedPokemon} />
    </Container>
  );
}
