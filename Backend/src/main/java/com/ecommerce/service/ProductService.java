package com.ecommerce.service;

import com.ecommerce.model.Product;
import com.ecommerce.payload.ProductDTO;
import com.ecommerce.payload.ProductResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ProductService {

    ProductDTO addProduct(Long categoryId, ProductDTO productDTO);
    ProductResponse searchByCategory(Long categoryId);
    ProductResponse getAllProducts();
    ProductResponse searchProductByKeyword(String keyword);
    ProductDTO deleteProduct(Long productId);
    ProductDTO updateProduct(Long productId, ProductDTO productDTO);
    ProductDTO updateProductImage(Long productId, MultipartFile image) throws IOException;
}

