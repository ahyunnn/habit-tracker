const MandalartPage = () => {
  return (
    <div>
      <div>Mandalart</div>
      <div className="grid grid-cols-3 gap-2 w-full max-w-md">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="border p-4 rounded-lg bg-white text-center">
            Cell {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MandalartPage;
