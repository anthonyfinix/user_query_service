import express, { Router } from 'express';
// utility routes
import error from './error_handler';
import not_found from './not_found';
// entities
import user from '../user/index';
import contact_details from '../contact_details/routes';

const router: Router = express.Router();
router.use('/user', user);
router.use('/contact_details', contact_details)
router.use(not_found);
router.use(error);

export default router;