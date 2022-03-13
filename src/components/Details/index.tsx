import { FC, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { url } from "../../consts";

type DetailsProps = {
  selectedPokemon: string | null;
};

type Pokemon = {
  base_experience: number;
};

const Container = styled("div")`
  background: green;
`;

const Details: FC<DetailsProps> = ({ selectedPokemon }) => {
  const [pokemon, setPokemon] = useState<null | Pokemon>(null);

  useEffect(() => {
    if (selectedPokemon === null) return;

    const fetchData = async () => {
      try {
        const data = await axios(selectedPokemon);

        setPokemon(data.data);
      } catch (error) {
        console.log("handle error", error);
      }
    };

    fetchData();
  }, [selectedPokemon]);

  if (pokemon === null) return <div>select pokemon</div>;

  return (
    <Container>
      <div>{`base experience: ${pokemon.base_experience}`}</div>
    </Container>
  );
};

export default Details;
