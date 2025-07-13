const db = require("../config/firebase");

exports.createGrade = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Grade name is required" });

    const gradeRef = db.ref("grades").push();
    await gradeRef.set({ name });

    res.status(201).json({ id: gradeRef.key, name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getGrades = async (req, res) => {
  try {
    const snapshot = await db.ref("grades").once("value");
    const data = snapshot.val();

    const grades = data
      ? Object.keys(data).map(id => ({ id, ...data[id] }))
      : [];

    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await db.ref(`grades/${id}`).update({ name });
    res.json({ message: "Grade updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteGrade = async (req, res) => {
  try {
    const { id } = req.params;
    await db.ref(`grades/${id}`).remove();
    res.json({ message: "Grade deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
