import Answer from "../models/Answer";
import Question from "../models/Questions";
import Therapist from "../models/Therapist";

class TherapistController {
    async fetchTherapist(req, res, next) {
        try {
            const therapists = await Therapist.find({});
            return res.json(therapists)
        } catch (err) {
            return next(err)
        }
    }
    async fetchQuestions(req,res,next) {
        const {therapistId} = req.params
        try {
            let questionsIds = [];
            const questions = [];
            const answers = await Answer.find({therapist:therapistId});
            answers.map(item => {
                questionsIds.push(item.question);
            })
            await Promise.all(questionsIds.map(async item => {
                const data = await Question.findById(item).populate('answers');
                questions.push(data);
            }))
            const therapist = await Therapist.findById(therapistId)
            return res.json({questions,therapist});
        } catch (err) {
            return next(err);
        }
    }
}

export default new TherapistController();