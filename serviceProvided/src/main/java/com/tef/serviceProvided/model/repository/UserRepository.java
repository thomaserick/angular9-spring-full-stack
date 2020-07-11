package com.tef.serviceProvided.model.repository;

import com.tef.serviceProvided.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {

    //Pode ou não existir
    Optional<User> findByUsername(String username);

}
