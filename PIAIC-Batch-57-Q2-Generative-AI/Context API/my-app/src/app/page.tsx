import Parent from "./components/Parent/Parent";
import { ContextProvider } from "./context/MyContext";

export default function Home() {
  return (
    <>
      <div className="text-center p-5 bg-slate-400 font-bold">
        Conetext API
      </div>
      <ContextProvider>
        <Parent/>
      </ContextProvider>
    </>
  );
}
