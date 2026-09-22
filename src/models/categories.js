import db from '../db.js';

const getAllCategories = async () => {
    const query = 'SELECT category_id, name  FROM public.category ORDER BY name ';
    const result = await db.query(query);
    return result.rows;
};

const getCategoryById = async (categoryId) => {
    const query = `
    SELECT category.category_id,
    category.name
    FROM public.category
    WHERE category_id = $1
    ORDER BY name;
    `

    const queryParams = [categoryId];
    const result = await db.query(query, queryParams);

    return result.rows;

}

const getprojectBycategoryId = async (categoryId) => {
    
    const query = `
    SELECT
          service_projects.project_id,
          service_projects.organization_id,
          service_projects.title,
          service_projects.description,
          service_projects.location,
          service_projects.date
          FROM service_projects
          JOIN project_category
          ON service_projects.project_id = project_category.project_id
           WHERE project_category.category_id = $1
      `; 

    const queryParams = categoryId;
    const result = await db.query(query, [queryParams]);

    return result.rows;
}

export {getAllCategories, getCategoryById, getprojectBycategoryId};
     