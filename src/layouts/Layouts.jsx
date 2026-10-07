import Sidebar from "../components/Sidebar";

export default function Layouts() {
  return (
    <div className="flex h-screen w-screen flex-col bg-background lg:flex-row">
      <Sidebar />
    </div>
  );
}
