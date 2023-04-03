import Answer from "../models/Answer";
import Question from "../models/Questions";

class AnswerController {
    async fetchAnswerForQuestion(req, res, next) {
        const { questionId } = req.params;
        try {
            const answers = await Answer.find({ question: questionId }).populate('therapist');
            const question = await Question.findById(questionId)
            return res.json({answers,question});
        } catch (err) {
            return next(err);
        }
    }
    async fetchSingleAnswer(req, res, next) {
        const { answerId } = req.params;
        try {
            const answer = await Answer.findById(answerId).populate('question').populate('therapist')
            return res.json(answer)
        } catch (err) {
            return next(err)
        }
    }
    async addLike(req, res, next) {
        const { answerId } = req.params;
        try {
            const answer = await Answer.findOneAndUpdate({ _id: answerId }, {$inc: {'like': 1}}).exec();
            return res.json(answer);
        } catch (err) {
            return next(err)
        }
    }
}

export default new AnswerController();