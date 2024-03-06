import { styled } from "@mui/material";

import { useSettings } from "../hooks/useSettings";
import Spinner from "./Spinner";

const Img = styled("img")`
  width: 10rem;
`;

function Logo() {
  const { settings: { logo } = {}, isLoading } = useSettings();

  if (isLoading) return <Spinner />;

  return <Img src={logo} alt="Kilomet logo" />;
}

export default Logo;
