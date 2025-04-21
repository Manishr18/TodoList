package com.manish.todo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manish.todo.Entity.Todo;
import com.manish.todo.services.TodoService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/todos")
public class TodoController {
 
	private final TodoService todoservice;

	public TodoController(TodoService todoservice) {
		super();
		this.todoservice = todoservice;
	}
	@GetMapping
	public List<Todo> gettodos(){
		return todoservice.getalltodo();
				
	}
	@PostMapping
	public Todo addtodo(@RequestBody Todo todo) {
		return todoservice.createtodo(todo);
	}
	@PutMapping("/{id}")
	public Todo updatetodo(@PathVariable Long id,@RequestBody Todo todo) {
		return todoservice.updatetodo(todo, id);
	}
	@DeleteMapping("/{id}")
	public void deletetodo(@PathVariable Long id) {
		 todoservice.deletetodo(id);
	}
	
	
	
}
