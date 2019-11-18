void setup() {
  // initialize serial:
  Serial.begin(9600);
  ....
}

void loop() {
  // if there's any serial available, read it:
  while (Serial.available() > 0) {

    // look for the next valid integer in the incoming serial stream:
    int i  = Serial.parseInt();
    // look for the next valid byte in the incoming serial stream:
    byte b = Serial.read();
    // look for the newline. That's the end of your sentence:
    if (Serial.read() == '\n') 
      .....
      
    // print the three numbers in one string as hexadecimal:
    Serial.print(15, HEX);//print F
    Serial.print(10, DEC);//Print 10
    Serial.println("Hello"); //Print Hello\n
    
  }
}
