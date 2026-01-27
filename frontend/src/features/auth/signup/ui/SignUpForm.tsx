"use client"

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { SignUpAPI } from "../api/signupAPI";

interface UserInfo {
  id: string;
  password: string;
  nickname: string;
}
const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({id: "", password: "", nickname: ""})

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
   const {name, value} = e.target;

   setUserInfo((prev) => ({
    ...prev,
    [name]: value
   }))
  }

  const handleSubmit = async () => {
    if (!userInfo.id || !userInfo.password || !userInfo.nickname) {
      alert("모든 항목을 입력해주세요.")
      return
    }

    try {
      const result = await SignUpAPI(userInfo)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

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
        회원가입
      </Typography>

      <Box>
        <Typography variant="body2" mb={0.5}>
          아이디
        </Typography>
        <TextField
          name="id"
          fullWidth
          size="small"
          sx={{
            borderRadius: 1,
          }}
          value={userInfo.id}
          onChange={handleChange}
          />
      </Box>

      <Box>
        <Typography variant="body2" mb={0.5}>
          비밀번호
        </Typography>
        <TextField
          name="password"
          fullWidth
          size="small"
          type="password"
          sx={{
            borderRadius: 1,
          }}
          value={userInfo.password}
          onChange={handleChange}
          />
      </Box>

      <Box>
        <Typography variant="body2" mb={0.5}>
          닉네임
        </Typography>
        <TextField
          name="nickname"
          fullWidth
          size="small"
          sx={{
            borderRadius: 1,
          }}
          value={userInfo.nickname}
          onChange={handleChange}
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
        onClick={() => handleSubmit()}
      >
        회원가입
      </Button>
    </Box>
  );
};

export default SignUpForm;
