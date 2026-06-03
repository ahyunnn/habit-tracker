import { DownloadGridView } from "./DownloadGridView";

interface Props {
  bId: string;
  data: any;
}

export const DownloadListView = ({ bId, data }: Props) => {
  if (bId === "center") {
    return <DownloadGridView bId={bId} data={data} />;
  }

  const cells = data[bId].cells;

  return (
    <div
      style={{
        height: "100%",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        fontFamily: "Nanum Gothic, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#f0f0f0",

          height: "40px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          fontWeight: 700,

          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            lineHeight: 1,
            display: "block",
            position: "relative",
            top: "-8px",
            fontSize: "15px",
          }}
        >
          {cells.title || ""}
        </span>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {["1", "2", "3", "4", "5", "6", "7", "8"].map((id, idx) => (
          <div
            key={id}
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "32px",
              borderBottom: "1px solid #eee",
              padding: "4px 0",
            }}
          >
            <div
              style={{
                width: "24px",
                textAlign: "center",
                color: "#999",
                fontSize: "12px",
              }}
            >
              {idx + 1}
            </div>

            <div
              style={{
                flex: 1,
                fontSize: "13px",
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
              }}
            >
              {cells[id] || ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
