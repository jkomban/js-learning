Strucural design patterns -
    * Concerned about how objects are made up and simplify relationships between objects
    * In another word , how an object is related to another object
    * SP - either by extend functionality or Simplify functionality


1. Decorator Patterns -extend functionality
    * New functionality to existing objects without being obstructive
    * Wraps an object
    * Protects an object
2. Flyweight Patterns / Facade Pattern -> Simplify or Mimic Simplifying pattern
    a. Facade
        * Provide a simple interface to a complicated system
            - Example -> front of a building,... good luking front, but inside it might be nasty :)
            - Example jQuery -> simple functions to deal with DOM 
        * Difference between decorator and facade is 
            facade is not adding new functionality , its just adding a wrapper to do multiple functionality in one interface
    b. Flyweight
        * As the name suggests - flying weight only :)
            - Conserves memory by sharing portions of an object between objects
            *** -  so Use this if the data is duplicated across lots of obects (1000s) because of overhead of implementation 
            
