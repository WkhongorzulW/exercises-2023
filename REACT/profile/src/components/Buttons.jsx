import { Button } from "@mui/material";

export default function Buttons({ greet, setDate }) {
  return (
    <div className="btns">
      <Button color={"primary"} variant={"outlined"} onClick={greet}>
        Greet People
      </Button>
      <Button
        color={"primary"}
        variant={"outlined"}
        onClick={() => {
          let now = new Date();
          setDate(
            `${now.getMonth() + 1} / ${now.getDate()}, ${now.getFullYear()}`
          );
        }}
      >
        Show Date
      </Button>
    </div>
  );
}
