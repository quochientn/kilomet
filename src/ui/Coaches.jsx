import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useCoaches } from "../hooks/useCoaches";
import Spinner from "./Spinner";
import Coach from "./Coach";

function Coaches() {
  const navigate = useNavigate();
  const { coaches, isLoading } = useCoaches();

  if (isLoading) return <Spinner />;

  return (
    <Container maxWidth="lg ">
      <Grid2 container rowSpacing={12} pt={8} pb={12}>
        {coaches.map((coach) => (
          <Grid2
            md={6}
            xs={12}
            key={coach.id}
            component={motion.div}
            initial={{ y: 300 }}
            whileInView={{ y: 0, transition: { type: "spring", duration: 1 } }}
            viewport={{ once: true }}
          >
            <Coach
              src={coach.image}
              alt={coach.name}
              name={coach.name}
              onClick={() => navigate(`/about/${coach.id}`)}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default Coaches;
