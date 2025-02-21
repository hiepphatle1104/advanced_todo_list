import { Schema, model } from "mongoose";

const taskSchema = new Schema({
	title: {
		type: String,
		required: true,
	},

	content: {
		type: String,
	},

	status: {
		type: String,
		enum: ["done", "in_progress", "not_started"],
	},

	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

const Task = model("Task", taskSchema);
export default Task;
