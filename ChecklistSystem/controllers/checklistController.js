
const rules = require("../config/rules");
const { fetchApplicationData } = require("../services/apiService");

const evaluateChecklist = async () => {
  try {
    const data = await fetchApplicationData();

    const results = rules.map((rule) => ({
      id: rule.id,
      description: rule.description,
      passed: rule.condition(data),
    }));

    return results;
  } catch (error) {
    console.error("Error evaluating checklist:", error.message);
    throw new Error("Checklist evaluation failed");
  }
};

module.exports = { evaluateChecklist };
