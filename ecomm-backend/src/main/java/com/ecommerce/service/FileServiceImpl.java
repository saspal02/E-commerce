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
    public String uploadImage(String path, MultipartFile file, String oldFileName) throws IOException {
        String originalFileName = file.getOriginalFilename();

        if (originalFileName != null && originalFileName.equalsIgnoreCase("placeholder.png")) {
            return "placeholder.png";
        }

        File folder = new File(path);
        if (!folder.exists()) folder.mkdir();

        String fileName;
        if (oldFileName != null && !oldFileName.equals("placeholder.png")) {
            fileName = oldFileName;
        } else {
            String ext = originalFileName.substring(originalFileName.lastIndexOf('.'));
            fileName = UUID.randomUUID().toString() + ext;
        }

        Files.copy(file.getInputStream(), Paths.get(path + File.separator + fileName),
                java.nio.file.StandardCopyOption.REPLACE_EXISTING);

        return fileName;
    }
}
