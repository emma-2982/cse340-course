import db from './db.js';

const getAllProjects = async () => {
    const query = `
        SELECT 
            service_projects.project_id,
            service_projects.organization_id,
            service_projects.title,
            service_projects.description AS project_description,
            service_projects.location,
            service_projects.date,
            organization.name AS organization_name,
            organization.description AS organization_description
        FROM service_projects AS service_projects
        JOIN organization AS organization
          ON service_projects.organization_id = organization.organization_id
        ORDER BY service_projects.date;
    `;
    const result = await db.query(query);
    return result.rows;
};

export { getAllProjects };