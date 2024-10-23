import UserForm from "./Users/page";

export default function Home() {
  return (
    <div className="bg-green-50">
      <div className="bg-green-300 p-5 text-center font-bold">
        Zod Validation
      </div>
      <UserForm/>
    </div>
  );
}
