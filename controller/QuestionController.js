import Question from "../models/Questions";

class QuestionController {
    async fetchQuestions  (req,res,next) {
        try {
            const questions = await Question.find({});
            return res.json(questions);
        } catch (err) {
            return next(err);
        }
    }
}

export default new QuestionController();