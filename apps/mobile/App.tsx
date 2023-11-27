import Routes from "./src/routes";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <StatusBar />
      </QueryClientProvider>
    </>
  );
}
