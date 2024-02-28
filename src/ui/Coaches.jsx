import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { useCoaches } from "../hooks/useCoaches";
import Spinner from "./Spinner";
import Coach from "./Coach";

function Coaches() {
  const { coaches, isLoading } = useCoaches();
  console.log(coaches);

  if (isLoading) return <Spinner />;

  return (
    <Container maxWidth="lg ">
      <Grid2 container rowSpacing={12} pt={8} pb={12}>
        {coaches.map((coach) => (
          <Grid2 md={6} key={coach.id}>
            <Coach src={coach.image} alt={coach.name} name={coach.name} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default Coaches;
