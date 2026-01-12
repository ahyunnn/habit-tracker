import { Box } from "@mui/material";
import LoginForm from "@/features/auth/login/ui/LoginForm";

const LoginPage = () => {
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
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
