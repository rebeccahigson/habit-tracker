import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {

  return (
    <BrowserRouter>
      <main className='wrapper'>
        <section className='container'>
          <AppRoutes />
        </section>
      </main>
    </BrowserRouter>
  )
};