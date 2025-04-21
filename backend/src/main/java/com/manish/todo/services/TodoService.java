package com.manish.todo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.manish.todo.Entity.Todo;
import com.manish.todo.repository.TodoRepo;

@Service
public class TodoService {
	private final TodoRepo todorepo ;

	public TodoService(TodoRepo todorepo) {
		super();
		this.todorepo = todorepo;
	}
	public List<Todo> getalltodo(){ 
		return todorepo.findAll();
	}
	public Todo gettodobyid(Long id) {
		return todorepo.findById(id)
				.orElseThrow(()-> new RuntimeException("todo with id not found"));
	}
	public Todo createtodo(Todo todo) {
		return todorepo.save(todo);
	}
	public Todo updatetodo(Todo updatedtodo,Long id) {
		Todo existingtodo=gettodobyid(id);
		existingtodo.setDescription(updatedtodo.getDescription());
		existingtodo.setTitle(updatedtodo.getTitle());
		existingtodo.setCompleted(updatedtodo.isCompleted());
		
		return todorepo.save(existingtodo);
		
		
	}
	public void deletetodo(Long id) {
		 todorepo.deleteById(id);
	}
	
}
