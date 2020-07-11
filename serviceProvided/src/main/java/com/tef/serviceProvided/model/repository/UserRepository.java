package com.tef.serviceProvided.model.repository;

import com.tef.serviceProvided.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {

}
