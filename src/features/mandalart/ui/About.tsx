import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ ml: 3, mt: 1 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        ✨ 나만의 만다르트 만들기
      </Typography>
      <Typography sx={{ mt: 2, fontSize: "19px" }}>
        나만의 만다르트를 만들어서 다운로드 해보세요!
      </Typography>
      <Typography sx={{ mt: 0.5, fontSize: "19px" }}>
        8칸을 다 채우지 않아도 돼요! 리스트/그리드 형태 중 원하는대로
        만들어보세요!
      </Typography>
      <Typography sx={{ mt: 0.5, fontSize: "19px" }}>
        완성 후 png, pdf 확장자로 저장해보세요!
      </Typography>
    </Box>
  );
};

export default About;
