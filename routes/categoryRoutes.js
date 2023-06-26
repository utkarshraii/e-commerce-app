import  express  from "express";
import {isAdmin,requireSignIn} from './../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";
const router=express.Router();



//routes
//create-category
router.post('/create-category',
    requireSignIn,
    isAdmin,
    createCategoryController
);

//update category
router.put('/update-category/:id',
requireSignIn,
isAdmin,
updateCategoryController
)

//getAll category
router.get('/get-category',
    categoryController
)

//singlecategory
router.get('/single-category/:slug',
    singleCategoryController)
export default router;

//delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)