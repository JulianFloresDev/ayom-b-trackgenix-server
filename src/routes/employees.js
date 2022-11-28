import express from 'express';
import employeesControllers from '../controllers/employees';
import employeesValidations from '../validations/employees';
import checkAuth from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', checkAuth(['SUPER_ADMIN', 'ADMIN']), employeesControllers.getAllEmployees);
router.get('/:id', checkAuth(['SUPER_ADMIN', 'ADMIN', 'EMPLOYEE']), employeesControllers.getEmployeeById);
router.post('/', employeesValidations.validateCreation, employeesControllers.createEmployee);
router.put('/:id', checkAuth(['SUPER_ADMIN', 'ADMIN', 'EMPLOYEE']), employeesValidations.validateCreation, employeesControllers.editEmployee);
router.delete('/:id', checkAuth(['SUPER_ADMIN', 'ADMIN', 'EMPLOYEE']), employeesControllers.deleteEmployee);

export default router;
