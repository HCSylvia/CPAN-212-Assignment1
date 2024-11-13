const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));