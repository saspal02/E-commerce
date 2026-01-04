package com.ecommerce.service;

import com.ecommerce.payload.CartDTO;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CartService {

    CartDTO addProductToCart(Long productId, Integer quantity);

    List<CartDTO> getAllCarts();

    CartDTO getUserCart();

    @Transactional
    CartDTO updateProductQuantityInCart(Long productId, Integer quantity);
}
