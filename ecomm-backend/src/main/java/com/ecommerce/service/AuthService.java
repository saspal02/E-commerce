package com.ecommerce.service;

import com.ecommerce.payload.AuthenticationResult;
import com.ecommerce.security.jwt.request.LoginRequest;
import com.ecommerce.security.jwt.request.SignUpRequest;
import com.ecommerce.security.jwt.response.MessageResponse;
import com.ecommerce.security.jwt.response.UserInfoResponse;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;

public interface AuthService {

    AuthenticationResult login(LoginRequest loginRequest);

    ResponseEntity<MessageResponse> register(SignUpRequest signUpRequest);

    UserInfoResponse getCurrentUserDetails(Authentication authentication);

    ResponseCookie logoutUser();


}
