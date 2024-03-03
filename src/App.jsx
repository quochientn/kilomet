import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Coach from "./pages/Coach";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="about/:coachId" element={<Coach />} />
      <Route path="training" element={<Training />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:blogId" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
