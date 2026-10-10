import express from 'express';

import { showHomePage } from './controllers/index.js';
import { showOrganizationsPage, showNewOrganizationForm,processNewOrganizationForm,organizationValidation,showOrganizationDetailsPage,showEditOrganizationForm,processEditOrganizationForm,showNewProjectForm,processNewProjectForm} from './controllers/organizations.js';
import { showProjectsPage, showProjectDetailsPage, projectValidation, showEditProjectForm, processEditProjectForm, } from './controllers/projects.js';
import { showCategoriesPage, showCategoriesDetailsPage,showAssignCategoriesForm,processAssignCategoriesForm,showNewCategoryForm,processNewCategoryForm,showEditCategoryForm,processEditCategoryForm,categoryValidation} from './controllers/categories.js';
import { testErrorPage } from './controllers/errors.js';
import { showUserRegistrationForm, processUserRegistrationForm,showLoginForm,processLoginForm,processLogout,requireLogin, showDashboard, requireRole, showAdminDashboard, showUsersPage } from './controllers/users.js';

const router = express.Router();

router.get('/', showHomePage);
router.get('/organizations', showOrganizationsPage);
router.get('/projects', showProjectsPage);
router.get('/categories', showCategoriesPage);
router.get('/organization/:id', showOrganizationDetailsPage);
router.get('/test-error', testErrorPage);
router.get('/project/:id', showProjectDetailsPage);
router.get('/category/:id', showCategoriesDetailsPage);
router.get('/new-organization', requireRole('admin'), showNewOrganizationForm);
router.post('/new-organization', requireRole('admin'), organizationValidation, processNewOrganizationForm)
router.get('/edit-organization/:id', requireRole('admin'), showEditOrganizationForm);
router.post('/edit-organization/:id', requireRole('admin'), organizationValidation, processEditOrganizationForm);
router.get('/new-project', requireRole('admin'), showNewProjectForm);
router.post('/new-project', requireRole('admin'), projectValidation,processNewProjectForm);
router.get('/assign-categories/:projectId', requireRole('admin'), showAssignCategoriesForm);
router.post('/assign-categories/:projectId',requireRole('admin'), processAssignCategoriesForm);
router.post('/edit-project/:id', requireRole('admin'), projectValidation, processEditProjectForm);
router.get('/edit-project/:id',requireRole('admin'), showEditProjectForm);
router.get('/new-category', requireRole('admin'), showNewCategoryForm);
router.post('/new-category', requireRole('admin'), categoryValidation,processNewCategoryForm);
router.get('/edit-category/:id',requireRole('admin'), showEditCategoryForm);
router.post('/edit-category/:id',requireRole('admim'), categoryValidation,processEditCategoryForm);
router.get('/register', showUserRegistrationForm);
router.post('/register', processUserRegistrationForm);
router.get('/login', showLoginForm);
router.post('/login', processLoginForm);
router.get('/logout', processLogout);
router.get('/dashboard', requireLogin, showDashboard);
router.get('/admin', requireLogin, requireRole('admin'), showAdminDashboard);
router.get('/users',requireLogin, requireRole('admin'),showUsersPage);

export default router;