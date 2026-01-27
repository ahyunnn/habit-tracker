import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your-secret-key"; // 실제로는 환경변수로 관리!

const router = Router();

interface User {
  id: number;
  email: string;
  password: string;
  nickname: string;
}

let users: User[] = [];
let userId = 1;

// signup
router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { email, password, nickname } = req.body;

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return res
        .status(409)
        .json({ status: false, message: "이미 존재하는 유저입니다." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: User = {
      id: userId++,
      password: hashedPassword,
      email,
      nickname,
    };
    users.push(newUser);

    res.status(201).json({
      success: true,
      message: "회원가입 성공!",
      user: {
        id: newUser.id,
        email: newUser.email,
        nickname: newUser.nickname,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류가 발생했습니다. " });
  }
});

// login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = users.find((user) => (user.email = email));
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "존재하지 않는 사용자입니다. " });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "비밀번호가 틀렸습니다." });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({
      message: "로그인 성공",
      token,
      user: {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "오류가 발생했습니다." });
  }
});

export default router;
