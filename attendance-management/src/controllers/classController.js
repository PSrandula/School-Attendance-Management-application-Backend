const db = require("../config/firebase");

exports.createClass = async (req, res) => {
  try {
    const { gradeId } = req.params;
    const { name } = req.body;

    const newClassRef = db.ref(`grades/${gradeId}/classes`).push();
    await newClassRef.set({ name });

    res.status(201).json({ id: newClassRef.key, name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClasses = async (req, res) => {
  try {
    const { gradeId } = req.params;

    const snapshot = await db.ref(`grades/${gradeId}/classes`).once("value");
    const data = snapshot.val();

    const classes = data
      ? Object.keys(data).map(id => ({ id, ...data[id] }))
      : [];

    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateClass = async (req, res) => {
  try {
    const { gradeId, classId } = req.params;
    const { name } = req.body;

    await db.ref(`grades/${gradeId}/classes/${classId}`).update({ name });
    res.json({ message: "Class updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteClass = async (req, res) => {
  try {
    const { gradeId, classId } = req.params;

    await db.ref(`grades/${gradeId}/classes/${classId}`).remove();
    res.json({ message: "Class deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
