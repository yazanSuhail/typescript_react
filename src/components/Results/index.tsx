import { FC, useEffect, useState, Dispatch, SetStateAction } from "react";
import axios from "axios";
import styled from "styled-components";
import { url } from "../../consts";

type ResultsProps = {
  setSelectedPokemon: Dispatch<SetStateAction<null | string>>;
};

type ResultProps = {
  name: string;
  url: string;
};

const Container = styled("div")`
  background: yellow;
`;

const Results: FC<ResultsProps> = ({ setSelectedPokemon }) => {
  const [results, setResults] = useState<ResultProps[] | null>(null);

  const handleClick = (url: string) => {
    setSelectedPokemon(url);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios(`${url}/pokemon/?limit=20&offset=0`);

        setResults(data.data.results);
      } catch (error) {
        console.log("handle error", error);
      }
    };

    fetchData();
  }, []);

  if (results === null) return <div>loading</div>;

  return (
    <Container>
      {results.map(({ name, url }: { name: string; url: string }) => {
        return (
          <div key={name} onClick={() => handleClick(url)}>
            {name}
          </div>
        );
      })}
    </Container>
  );
};

export default Results;
