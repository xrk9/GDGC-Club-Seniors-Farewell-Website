import { createFileRoute } from "@tanstack/react-router";
import { MatrixPresentation } from "@/components/MatrixPresentation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE_MATRIX" },
      {
        name: "GDGC Seniors Farewell Seminar",
        content: "I'm not gonna tell you 😏",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <MatrixPresentation />;
}
