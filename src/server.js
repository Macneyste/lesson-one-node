import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const assignments = [
  { id: 1, title: 'Math homework', status: 'pending', score: 0 },
  { id: 2, title: 'English essay', status: 'completed', score: 85 },
  { id: 3, title: 'Science report', status: 'pending', score: 0 },
];

app.get('/', (req, res) => {
  res.send('Assignments backend is running');
});

app.get('/assignments', (req, res) => {
  res.json(assignments);
});

app.patch('/assignments/:id', (req, res) => {
  const id = Number(req.params.id);
  const assignment = assignments.find((item) => item.id === id);

  if (!assignment) {
    return res.status(404).json({ message: 'Assignment not found' });
  }

  const { title, status, score } = req.body;

  if (title !== undefined) {
    assignment.title = title;
  }

  if (status !== undefined) {
    assignment.status = status;
  }

  if (score !== undefined) {
    assignment.score = score;
  }

  return res.json({
    message: 'Assignment updated successfully',
    assignment,
  });
});

app.delete('/assignments/:id', (req, res) => {
  const id = Number(req.params.id);
  const assignmentIndex = assignments.findIndex((item) => item.id === id);

  if (assignmentIndex === -1) {
    return res.status(404).json({ message: 'Assignment not found' });
  }

  const deletedAssignment = assignments.splice(assignmentIndex, 1);

  return res.json({
    message: 'Assignment deleted successfully',
    assignment: deletedAssignment[0],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
