import SignUpForm from "@/features/auth/signup/ui/SignUpForm";
import { Box } from "@mui/material";

const SignUpPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#c0afaf",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignUpForm />
    </Box>
  );
};

export default SignUpPage;
