import {signUpForProject, removeVolunteerFromProject, } from '../models/volunteers.js';

const processVolunteerSignup = async (req, res) => {
    const userId = req.session.user.user_id;
    const projectId = req.params.id;

    try {
        const signedUp = await signUpForProject(userId, projectId);

        if (signedUp) {
            req.flash('success', 'You have signed up to volunteer!');
        } else {
            req.flash('error', 'You have already signed up for this project.');
        }

        res.redirect(`/project/${projectId}`);
    } catch (error) {
        console.error('Error signing up to volunteer:', error);
        req.flash('error', 'Unable to sign up. Please try again.');
        res.redirect(`/project/${projectId}`);
    }
};

const processVolunteerRemoval = async (req, res) => {
    const userId = req.session.user.user_id;
    const projectId = req.params.id;

    try {
        const removed = await removeVolunteerFromProject(userId, projectId);

        if (removed) {
            req.flash('success', 'You have been removed from the project.');
        } else {
            req.flash('error', 'Your volunteer signup was not found.');
        }

        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error removing volunteer:', error);
        req.flash('error', 'Unable to remove your signup. Please try again.');
        res.redirect('/dashboard');
    }
};

export {processVolunteerSignup, processVolunteerRemoval};
