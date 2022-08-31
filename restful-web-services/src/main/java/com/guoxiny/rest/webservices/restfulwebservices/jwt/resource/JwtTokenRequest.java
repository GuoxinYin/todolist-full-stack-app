package com.guoxiny.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndW94aW4iLCJleHAiOjE2NjI1MTIwMDQsImlhdCI6MTY2MTkwNzIwNH0.eiqHDC0-ssT-IqKTXmXZJCQjkyfTRhiO9YV7Pq0HwKjyuN56a3YE5IiPBCdQ31T59giHK3i7lPUZQXY3utPxOg"
//    }
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

