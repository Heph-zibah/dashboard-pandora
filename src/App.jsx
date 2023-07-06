import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import TopChart from "./components/TopChart";


function App() {

  return (
    <>
      <header className="flex">
        <Sidebar />
        <main className="w-full bg-[#e65f2b] bg-opacity-10">
          <Header />
          <TopChart />
        </main>
      </header>
    </>
  );
}

export default App
