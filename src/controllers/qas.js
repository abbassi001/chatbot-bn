import Qas from '../model/qas.js'


// GET ALL THE QasS
export const getQuestions = async (req, res) =>{
    try {
        const Questions = await Qas.find();
        res.status(200).json({"Qas": Questions});
    } catch (error) {
        res.status(404).json({message: error});
    }
};

// GET SINGLE Qas
export const getQuestion = async (req, res) =>{
    try {
        const Question = await Qas.findById(req.params.qasId);
        res.status(200).json({"Qas": Question} );
    } catch (error) {
        res.status(404).json({Error: error});
    }
}


// SUBMITS  ONE Qas
export const setQuestion = async (req,  res) => {
    try {
        const Question = await Qas.create({
            question:req.body.question, 
            answers:req.body.answers, 
        });
        res.status(200).json({ "Qas": Question })
    } catch (error) {
        res.status(404).json({Error: error });
        console.log(error)
    }
}


//UPDATE THE Qas
export const updateQuestion = async (req, res) =>{
    console.log(req.params)
    try {
        const updateQuestion = await Qas.updateOne(
            {_id: req.params.qasId}, 
            { $set: {
                question: req.body.question,
                answers: req.body.answers,
                }
            }
        );
        res.status(200).json({"Qas": updateQuestion});

    } catch (error) {
        res.status(404).json({Error: error });
    }
}


//DELETE THE Qas
export const deleteQuestion = async (req, res) =>{
    try {
        const deleteQuestion = await Qas.findByIdAndDelete({_id: req.params.qasId})
        res.status(200).json({"Qas": deleteQuestion});
    } catch (error) {
        res.status(404).json({Error: error});
    };
};