import express from 'express';
import superAdminsControllers from '../controllers/superAdmins';
import superAdminsValidations from '../validations/superAdmins';

const router = express.Router();

router
  .get('/', superAdminsControllers.getAllSuperAdmins)
  .post('/', superAdminsValidations.validateCreation, superAdminsControllers.createSuperAdmin)
  .get('/:id', superAdminsControllers.getSuperAdminById)
  .put('/:id', superAdminsValidations.validateCreation, superAdminsControllers.editSuperAdmin)
  .delete('/:id', superAdminsControllers.deleteSuperAdmin);

export default router;
