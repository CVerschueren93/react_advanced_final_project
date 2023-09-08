import { Button } from "@chakra-ui/react";
import { CreateEvent } from "./CreateEvent";

export const AddEventButton = () => {
  return (
    <CreateEvent>
      <Button>
        <p>Add event</p>
      </Button>
    </CreateEvent>
  );
};
