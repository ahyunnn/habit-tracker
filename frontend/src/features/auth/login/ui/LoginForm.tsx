import { Box, Button, TextField, Typography } from "@mui/material";

const LoginForm = () => {
  return (
    <Box
      sx={{
        width: 360,
        backgroundColor: "#ffffff",
        borderRadius: 3,
        padding: 4,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h6" align="center">
        로그인
      </Typography>

      <Box>
        <Typography variant="body2" mb={0.5}>
          아이디
        </Typography>
        <TextField
          fullWidth
          size="small"
          sx={{
            borderRadius: 1,
          }}
        />
      </Box>

      <Box>
        <Typography variant="body2" mb={0.5}>
          비밀번호
        </Typography>
        <TextField
          fullWidth
          size="small"
          type="password"
          sx={{
            borderRadius: 1,
          }}
        />
      </Box>

      <Button
        fullWidth
        sx={{
          mt: 2,
          backgroundColor: "#cccccc",
          color: "#333",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "#bdbdbd",
          },
        }}
      >
        로그인
      </Button>
    </Box>
  );
};

export default LoginForm;
