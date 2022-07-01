import "./App.css";
import Query from "./components/React Query/Query";
import { QueryClientProvider, QueryClient } from "react-query";
import { Suspense } from "react";
import TestQuery from "./TestQuery";
import Loading from "./components/Loading";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Suspense fallback={<Loading />}>
          <Query />
          <Query />
          <TestQuery />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
