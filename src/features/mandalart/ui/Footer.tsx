import { Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Typography sx={{ color: "gray" }}>
      <Link
        href="https://github.com/ahyunnn/habit-tracker"
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        sx={{ color: "inherit" }}
      >
        @ahyunnnn
      </Link>{" "}
      All rights reserved. 2026
    </Typography>
  );
};

export default Footer;
