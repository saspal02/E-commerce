package com.ecommerce.service;

import com.ecommerce.model.Category;
import com.ecommerce.payload.CategoryResponse;

public interface CategoryService {
    CategoryResponse getAllCategories();
    void createCategory(Category category);
    String deleteCategory(Long categoryId);
    Category updateCategory(Category category,Long categoryId);

}
