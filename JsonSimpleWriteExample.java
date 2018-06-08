/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.keyrestotrans;

/**
 *
 * @author BURAK
 */
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.io.FileWriter;
import java.io.IOException;

public class JsonSimpleWriteExample {

    public static void main(String[] args) {

        JSONObject obj = new JSONObject();
        obj.put("name", "mkyong.com");
        obj.put("age", 100);
        
        
        JSONArray list = new JSONArray();
        
      
        JSONObject value = new JSONObject();
        value.put("deneme1","1");
        value.put("deneme2","2");
        value.put("deneme3","3");        
        list.add(value);
        
        
        obj.put("kalem",(Object) list);
                        
        try (FileWriter file = new FileWriter("d:\\test.json")) {

            file.write(obj.toJSONString());
            file.flush();

        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.print(obj);

    }

    
}
