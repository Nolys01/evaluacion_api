const { Router } = require('express');
const { getEncuesta, postEncuesta, putEncuesta, patchEncuesta, deleteEncuesta } = require('../controllers/encuesta');
const router = Router()



router.get('/',getEncuesta);
router.post('/',postEncuesta);
router.put('/', putEncuesta);
router.patch('/',patchEncuesta);
router.delete('/', deleteEncuesta)



module.exports = router