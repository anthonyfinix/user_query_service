import express, { Router } from 'express';
import expressJson from '../../../middleware/expressJson';
import urlEncoded from '../../../middleware/urlEncoded';
import get from '../controllers/get';
import post from '../controllers/post';
import remove from '../controllers/remove';
import update from '../controllers/update';
const router: Router = express.Router();

router.get('/', get);
router.post('/', expressJson(), urlEncoded(), post);
router.put('/', expressJson(), urlEncoded(), update);
router.delete('/', remove);

export default router;