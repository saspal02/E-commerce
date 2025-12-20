package com.ecommerce.service;

import com.ecommerce.model.Product;
import com.ecommerce.payload.ProductDTO;
import com.ecommerce.payload.ProductResponse;

public interface ProductService {

    ProductDTO addProduct(Long categoryId, ProductDTO productDTO);
    ProductResponse searchByCategory(Long categoryId);
    ProductResponse getAllProducts();
    ProductResponse searchProductByKeyword(String keyword);
}

