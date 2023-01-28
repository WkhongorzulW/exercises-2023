import { Button } from "@mui/material";

export default function ButtonShow({ setShow }) {
  return (
    <div className="show">
      <Button
        onClick={() => {
          setShow(true);
        }}
      >
        Show
      </Button>
    </div>
  );
}
