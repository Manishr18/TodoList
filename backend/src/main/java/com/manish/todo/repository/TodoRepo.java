package com.manish.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manish.todo.Entity.Todo;

public interface TodoRepo extends JpaRepository<Todo, Long> {

}
