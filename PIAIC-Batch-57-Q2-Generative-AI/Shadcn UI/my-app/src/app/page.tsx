import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="h-full">
        <div className="text-center font-bold p-5 bg-slate-400">
          Shadecn UI
        </div>
        <div className="flex h-full justify-center items-center">
          <Button className="bg-red-600 mx-10">Custom Btn</Button>
          <Button variant={'customVarient'}>Shadcn Button</Button>
          <Button>Shadcn Button 2</Button>
        </div>
      </div>
    </>
  );
}
