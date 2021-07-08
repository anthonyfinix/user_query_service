import express, { Router } from 'express';

// middlewares
import urlEncoded from '../../../middleware/urlEncoded';
import expressJson from '../../../middleware/expressJson';
// validators
import get_validator from '../middlewares/validators/get';
import remove_validator from '../middlewares/validators/remove';
import post_validator from '../middlewares/validators/post';
import update_validator from '../middlewares/validators/update';
// services
import get from '../controllers/get';
import post from '../controllers/post'
import update from '../controllers/update'
import remove from '../controllers/remove'
import error_handler from '../../../routes/error_handler';
import multer from '../../../util/multer';


const router: Router = express.Router();
router.get('/', [get_validator], get);
router.post('/', [urlEncoded({}), error_handler, expressJson(), multer().single('profile'), post_validator], post);
// router.post('/', [urlEncoded({}), error_handler, expressJson(), post_validator], post);
router.put('/', [urlEncoded({}), expressJson(), update_validator], update);
router.delete('/', [remove_validator], remove);
export default router;