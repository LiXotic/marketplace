import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/counter")({
  component: CounterPage,
});

function CounterPage() {
  const [count, setCount] = useState(0);
  const [cash, setCash] = useState(0);

  return (
    <Container maxWidth="sm" sx={{ py: 4, pb: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Counter Exercise
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Click <strong>Add 1</strong> to increase the count, or{" "}
        <strong>Reset to 0</strong> to start over.
      </Typography>
      <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mb: 1, fontWeight: 600 }}
        >
          Current Count
        </Typography>
        <Typography
          aria-live="polite"
          sx={{ mb: 2.5, fontSize: "3rem", fontWeight: 700, lineHeight: 1 }}
        >
          {count}
        </Typography>
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          <Button
            disabled={count >= 100}
            variant="contained"
            onClick={() => setCount(count + 1)}
          >
            Add 1
          </Button>
          <Button
            disabled={count <= 0}
            variant="contained"
            onClick={() => setCount(count - 1)}
          >
            Subtract 1
          </Button>
          <Button variant="outlined" onClick={() => setCount(0)}>
            Reset to 0
          </Button>
        </Stack>
      </Paper>
      <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mb: 1, fontWeight: 600 }}
        >
          Current Cash
        </Typography>
        <Typography
          aria-live="polite"
          sx={{ mb: 2.5, fontSize: "3rem", fontWeight: 700, lineHeight: 1 }}
        >
          {cash}
        </Typography>
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          <Button
            disabled={cash >= 100}
            variant="contained"
            onClick={() => setCash(cash + 1)}
          >
            Add 1
          </Button>
          <Button
            disabled={cash <= 0}
            variant="contained"
            onClick={() => setCash(cash - 1)}
          >
            Subtract 1
          </Button>
          <Button variant="outlined" onClick={() => setCash(0)}>
            Reset to 0
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
