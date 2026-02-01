import { Button } from "@mui/material";

interface DownloadBtnProps {
  type: string;
}

const DownloadBtn = ({ type }: DownloadBtnProps) => {
  const handleDownload = () => {
    console.log(type);
  };

  return (
    <Button
      variant="contained"
      sx={{ height: "40px", color: "black", backgroundColor: "pink" }}
      onClick={handleDownload}
    >
      다운로드
    </Button>
  );
};

export default DownloadBtn;
