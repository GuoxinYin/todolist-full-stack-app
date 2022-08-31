package com.guoxiny.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {
	//GET
	// URI - /hello-world
	//method - "hello world"
	@RequestMapping(method=RequestMethod.GET, path="/hello-world")
	public String helloworld() {
		return "Hello world";
	}
	
	@RequestMapping(method=RequestMethod.GET, path="/hello-world-bean")
	public HelloWorldBean helloworldBean() {
		return new HelloWorldBean("Hello world bean");
	}
	
	@RequestMapping(method=RequestMethod.GET, path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloworldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}
