import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { EventPage } from "./pages/EventPage";
import { EventsPage, loader as postListLoader } from "./pages/EventsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root";
import {
  CreateEvent,
  action as createEventAction,
  loader as createEventLoader,
} from "./components/CreateEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <EventsPage />,
        loader: postListLoader,
      },
      {
        path: "/event/:eventId",
        element: <EventPage />,
        // loader: postLoader,
        // action: addComment,
      },
      {
        path: "/create-event",
        element: <CreateEvent />,
        loader: createEventLoader,
        action: createEventAction,
      },
    ],
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
