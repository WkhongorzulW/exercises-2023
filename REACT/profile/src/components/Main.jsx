import Buttons from "./Buttons";
import TechStack from "./TechStack";
import Title from "./Title";
import UserCard from "./UserCard";

export default function Main({ greet, date, setDate }) {
  return (
    <div>
      <Title />
      <div className="user">
        <TechStack date={date} />
        <UserCard />
      </div>
      <Buttons greet={greet} setDate={setDate} />
    </div>
  );
}
