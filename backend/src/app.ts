import express, { Request, Response } from "express";
import authRoutes from "./routes/auth";

const app = express();

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우터 연결
app.use("/api/auth", authRoutes);

// 기본 라우트
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "서버가 정상 작동 중입니다!" });
});

// 404 에러 핸들링
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "요청한 경로를 찾을 수 없습니다" });
});

export default app;
