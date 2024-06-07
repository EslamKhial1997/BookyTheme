import { configureStore } from '@reduxjs/toolkit';

import subCategorySlice from './subcategory/subCategorySlice';
import categorySlice from './category/categorySlice';


export default configureStore({
  reducer: {
  
    subCategory: subCategorySlice,
    category: categorySlice,
    // contents: contentSlice,
    // headers: headerSlice
  },
});