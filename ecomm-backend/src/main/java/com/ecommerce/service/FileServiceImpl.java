package com.ecommerce.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService {

    @Override
    public String uploadImage(String path, MultipartFile file) throws IOException {

        if (file == null || file.isEmpty()) {
            return "placeholder.png";
        }

        String originalFileName = file.getOriginalFilename();

        if (originalFileName == null) {
            return "placeholder.png";
        }

        int lastDotIndex = originalFileName.lastIndexOf('.');
        String ext = (lastDotIndex != -1) ? originalFileName.substring(lastDotIndex) : "";

        String fileName = UUID.randomUUID().toString() + ext;
        String filePath = path + File.separator + fileName;

        File folder = new File(path);
        if (!folder.exists()) {
            folder.mkdirs();
        }

        Files.copy(file.getInputStream(), Paths.get(filePath),
                java.nio.file.StandardCopyOption.REPLACE_EXISTING);

        return fileName;
    }
}