import mongoose from "mongoose";

const qasSchema = new mongoose.Schema({
    question: {
        type:  String,
        required: true,
    },
    answers: {
        type: Array,
        default: []
    },

},
{
    timestamps: true,
}
)

const qas = mongoose.model("qas", qasSchema);

export default qas;