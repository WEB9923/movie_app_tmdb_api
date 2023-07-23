import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import {Notifications} from "@mantine/notifications";
import {RouterProvider} from "react-router-dom";
import {Routes} from "./routes/Routes";

export default function App() {
  return (
    <>
       <MantineProvider withNormalizeCSS withGlobalStyles>
          <ModalsProvider>
             <Notifications />
             <RouterProvider router={Routes} />
          </ModalsProvider>
       </MantineProvider>
    </>
  )
}

