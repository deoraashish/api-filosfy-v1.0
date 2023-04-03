import express from 'express';
import AnswerController from '../controller/AnswerController';
import QuestionController from '../controller/QuestionController';
import TherapistController from '../controller/TherapistController';
const router = express.Router();

// ========== Questions Routes ==============
router.get('/questions',QuestionController.fetchQuestions)

// ========== Therapist Routes ==========
router.get('/therapists',TherapistController.fetchTherapist)
router.get('/questions/:therapistId',TherapistController.fetchQuestions)

// =============== answers =============
router.get('/answers/:questionId',AnswerController.fetchAnswerForQuestion)
router.get('/singleAnswer/:answerId',AnswerController.fetchSingleAnswer)
router.get('/addLikes/:answerId', AnswerController.addLike)



export default router;