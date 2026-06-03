interface Props {
  bId: string;
  data: any;
}

export const DownloadGridView = ({ bId, data }: Props) => {
  const cellLayout = ["1", "2", "3", "4", "title", "5", "6", "7", "8"];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: "2px",
        boxSizing: "border-box",
        fontFamily: "Nanum Gothic, sans-serif",
      }}
    >
      {cellLayout.map((cId) => {
        const isTitle = cId === "title";

        return (
          <div
            key={cId}
            style={{
              border: "1px solid #ddd",
              backgroundColor: isTitle
                ? bId === "center"
                  ? "#d3fbff"
                  : "#f0f0f0"
                : "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              fontSize: "15px",
              fontWeight: isTitle ? 700 : 400,
              padding: "6px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "100%",
                textAlign: "center",
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                lineHeight: "1.1",
                position: "relative",
                top: "-7px",
              }}
            >
              {data[bId].cells[cId] || ""}
            </div>
          </div>
        );
      })}
    </div>
  );
};
