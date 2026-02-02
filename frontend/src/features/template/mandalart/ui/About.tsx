import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box>
      <Typography variant="h6">나만의 만다르트 만들기</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        나만의 만다르트를 만들어서 다운로드 해보세요!
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        8칸을 다 채우지 않아도 돼요! 리스트/그리드 형태 중 원하는대로
        만들어보세요!
      </Typography>
    </Box>
  );
};

export default About;
