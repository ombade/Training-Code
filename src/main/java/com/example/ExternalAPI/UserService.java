package com.example.ExternalAPI;

import com.example.ExternalAPI.DTO.UserDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final Repo repo;

    public List<UserDTO> getUsers() {
        return repo.getUsers();
    }
}
