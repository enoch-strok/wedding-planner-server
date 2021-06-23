const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
        {
            projectName: { type: String },
            projectStatus: {type: String},
            progress: {type: Number},
            projectDescription: { type: String},
            notes: { type: String},
        },
        {
            timestamps: true,
        }
    );

module.exports.Project = mongoose.model('Project', ProjectSchema);