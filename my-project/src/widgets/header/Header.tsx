import Link from "next/link";

interface HeaderProps {
  onToggle: () => void;
}
const Header = ({ onToggle }: HeaderProps) => {
  return (
    <header className="h-[60px] bg-green-600 text-white text-lg font-bold flex items-center px-4">
      <button onClick={onToggle} className="mr-4">
        ☰
      </button>
      <Link href="/"> Habit Tracker</Link>
    </header>
  );
};

export default Header;
