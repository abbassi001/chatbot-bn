import express from 'express';
const router = express.Router();
import {getQuestions,getQuestion, setQuestion, updateQuestion, deleteQuestion} from "../controllers/qas.js"

// GET ALL THE POSTS
router.get('/', getQuestions);

//GET SINGLE POST
router.get('/:qasId', getQuestion);

//SUBMITS A POST
router.post('/', setQuestion);

//UPDATES A POST
router.patch('/:qasId', updateQuestion);

//DELETES A POST
router.delete('/:qasId', deleteQuestion);

// module.exports = router;
export default router