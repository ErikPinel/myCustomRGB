function MyCustomrgb(r, g, b) {
    //this function reacive 3 integers(0-255) and returns an array
    //which includes # at position [0] followed by Hex value of rgb
    
    
        let tempR = r;
        let tempG = g;
        let tempB = b;
        let remainder = 0;
        let store = ["#"];
        let storeRem = [];
        let index = 0;
    
    
     // if the given parameter cross the limit(0-255) it will be rounded up/down to the closest limit 
      if (r > 255) r = 255;
      if (g > 255) g = 255;
      if (b > 255) b = 255;
    
      if (r < 0) r = 0;
      if (g < 0) g = 0;
      if (b < 0) b = 0;
    
      
      if (r == 0) store.push("00");
      if (g == 0) store.push("00");
      if (b == 0) store.push("00");
    
      while (tempR !== 0) {
        remainder = tempR % 16; // r section - determin if the remainder should be transformed to A-F
        if (remainder > 9) {
          if (remainder == 10) {
            remainder = "A";
          } else if (remainder == 11) {
            remainder = "B";
          } else if (remainder == 12) {
            remainder = "C";
          } else if (remainder == 13) {
            remainder = "D";
          } else if (remainder == 14) {
            remainder = "E";
          } else if (remainder == 15) {
            remainder = "F";
          }
        }
    
        storeRem.unshift(remainder);
        tempR = Math.floor(tempR / 16);
      }
      store.push(storeRem.join(""));
      storeRem = [];
    
      while (tempG !== 0) {
        remainder = tempG % 16;  // g section - determin if the remainder should be transformed to A-F
        if (remainder > 9) {
          if (remainder == 10) {
            remainder = "A";
          } else if (remainder == 11) {
            remainder = "B";
          } else if (remainder == 12) {
            remainder = "C";
          } else if (remainder == 13) {
            remainder = "D";
          } else if (remainder == 14) {
            remainder = "E";
          } else if (remainder == 15) {
            remainder = "F";
          }
        }
    
        storeRem.unshift(remainder);
        tempG = Math.floor(tempG / 16);
      }
    
      store.push(storeRem.join(""));
      storeRem = [];
    
      while (tempB !== 0) {
        remainder = tempB % 16;
        if (remainder > 9) {
          if (remainder == 10) {
            remainder = "A";
          } else if (remainder == 11) {
            remainder = "B";
          } else if (remainder == 12) {
            remainder = "C";
          } else if (remainder == 13) {
            remainder = "D";
          } else if (remainder == 14) {
            remainder = "E";
          } else if (remainder == 15) {
            remainder = "F";
          }
        }
    
        storeRem.unshift(remainder);
        tempB = Math.floor(tempB / 16);
      }
      store.push(storeRem.join(""));
      let store1;
      store1 = store.join("");
      return store1;
    }
    
    console.log(myCustomRGB(0, 25, 255));
    