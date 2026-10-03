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

const assignCategoryToProject = async (categoryId, projectId) => {
    const query = `
        INSERT INTO project_category (category_id, project_id)
        VALUES ($1, $2);
    `;

    await db.query(query, [categoryId, projectId]);
}

const updateCategoryAssignments = async (projectId, categoryIds) => {
    // First, remove existing category assignments for the project
    const deleteQuery = `
        DELETE FROM project_category
        WHERE project_id = $1;
    `;
    await db.query(deleteQuery, [projectId]);

    // Next, add the new category assignments
    for (const categoryId of categoryIds) {
        await assignCategoryToProject(categoryId, projectId);
    }
}

const createCategory = async (name) => {
    const query = `
        INSERT INTO category (name)
        VALUES ($1)
        RETURNING category_id;
    `;

    const queryParams = [name];
    const result = await db.query(query, queryParams);

    if (result.rows.length === 0) {
        throw new Error('Failed to create category');
    }

    return result.rows[0].category_id;
};


const updateCategory = async (categoryId, name) => {
    const query = `
        UPDATE category
        SET name = $1
        WHERE category_id = $2
        RETURNING category_id;
    `;

    const queryParams = [name, categoryId];
    const result = await db.query(query, queryParams);

    if (result.rows.length === 0) {
        throw new Error('Category not found');
    }

    return result.rows[0].category_id;
};

export {getAllCategories, getCategoryById, getprojectBycategoryId,updateCategoryAssignments, createCategory, updateCategory};
