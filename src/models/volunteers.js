import db from '../db.js';
// Add a user as a volunteer for a project
const signUpForProject = async (userId, projectId) => {
    const query = `
        INSERT INTO project_volunteers (user_id, project_id)
        VALUES ($1, $2)
        ON CONFLICT (user_id, project_id) DO NOTHING
        RETURNING user_id
    `;

    const result = await db.query(query, [userId, projectId]);
    return result.rowCount > 0;
};

// Get the projects a user has volunteered for
const getVolunteerProjectsByUserId = async (userId) => {
    const query = `
        SELECT
            service_projects.project_id,
            service_projects.title,
            service_projects.description,
            service_projects.location,
            service_projects.date,
            organization.name AS organization_name
        FROM project_volunteers project_volunteers
        JOIN service_projects service_projects
            ON project_volunteers.project_id = service_projects.project_id
        JOIN organization organization
            ON service_projects.organization_id = organization.organization_id
        WHERE project_volunteers.user_id = $1
        ORDER BY service_projects.date ASC
    `;

    const result = await db.query(query, [userId]);
    return result.rows;
};

// Remove a user's volunteer signup
const removeVolunteerFromProject = async (userId, projectId) => {
    const query = `
        DELETE FROM project_volunteers
        WHERE user_id = $1 AND project_id = $2
        RETURNING user_id
    `;

    const result = await db.query(query, [userId, projectId]);
    return result.rowCount > 0;
};

export {
    signUpForProject,
    getVolunteerProjectsByUserId,
    removeVolunteerFromProject
};

