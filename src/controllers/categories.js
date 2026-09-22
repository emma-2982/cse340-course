import { getAllCategories, getCategoryById, getprojectBycategoryId } from '../models/categories.js';

const showCategoriesPage = async (req, res) => {
    const categories = await getAllCategories();

    const title = 'Service Categories';
    res.render('categories', { title, categories });
};

const showCategoriesDetailsPage = async (req, res) => {
    const id = req.params.id;
   
    const category = await getCategoryById(id);
   
    const projects = await getprojectBycategoryId(id);
    const title = 'Category Details';

    res.render('category', {title, category, projects });
}

export { showCategoriesPage, showCategoriesDetailsPage };