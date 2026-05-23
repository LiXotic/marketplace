import { createFileRoute } from '@tanstack/react-router'
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";


export const Route = createFileRoute("/counter")({
	component: CounterPage,
});

function CounterSection({
	title,
	value,
	onAdd,
	onSubtract,
	onReset,
}: {
	title: string;
	value: number;
	onAdd: () => void;
	onSubtract: () => void;
	onReset: () => void;
}) {
	return (
		<Paper
			variant="outlined"
			sx={{ p: 3, mb: 3 }}
			aria-labelledby={`${title}-heading`}
		>
			<Typography
				id={`${title}-heading`}
				variant="subtitle2"
				color="text.secondary"
				sx={{ mb: 1, fontWeight: 600 }}
			>
				{title}
			</Typography>
			<Typography
				aria-live="polite"
				sx={{ mb: 2.5, fontSize: "3rem", fontWeight: 700, lineHeight: 1 }}
			>
				{value}
			</Typography>
			<Stack direction="row" sx={{ flexWrap: "wrap" }}>
				<Button variant="contained" onClick={onAdd}>
					Add 1
				</Button>
				<Button variant="contained" onClick={onSubtract}>
					Subtract 1
				</Button>
				<Button variant="outlined" onClick={onReset}>
					Reset to 0
				</Button>
			</Stack>
		</Paper>
	);
}

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

			<CounterSection
				title="Current count"
				value={count}
				onAdd={() => setCount(count + 1)}
				onSubtract={() => setCount(count - 1)}
				onReset={() => setCount(0)}
			/>

			<CounterSection
				title="Current Cash"
				value={cash}
				onAdd={() => setCash(cash + 1)}
				onSubtract={() => setCash(cash - 1)}
				onReset={() => setCash(0)}
			/>
		</Container>
	);
};