const db = require("../config/firebase");

exports.createStudent = async (req, res) => {
  try {
    const { gradeId, classId } = req.params;
    const { name, age } = req.body;

    const studentRef = db.ref(`grades/${gradeId}/classes/${classId}/students`).push();
    await studentRef.set({ name, age });

    res.status(201).json({ id: studentRef.key, name, age });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const { gradeId, classId } = req.params;
    const snapshot = await db.ref(`grades/${gradeId}/classes/${classId}/students`).once("value");
    const data = snapshot.val();

    const students = data
      ? Object.keys(data).map(id => ({ id, ...data[id] }))
      : [];

    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { gradeId, classId, studentId } = req.params;
    const { name, age } = req.body;

    await db.ref(`grades/${gradeId}/classes/${classId}/students/${studentId}`).update({ name, age });
    res.json({ message: "Student updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { gradeId, classId, studentId } = req.params;

    await db.ref(`grades/${gradeId}/classes/${classId}/students/${studentId}`).remove();
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
