// JavaScript File
function addition (z, w) {
                var v = {};
                v.a = z.a + w.a;
                v.b = z.b + w.b;
                
                return v;
            }
            
            function subtraction (z, w) {
                var v = {};
                v.a = z.a - w.a;
                v.b = z.b - w.b;
                
                return v;
            }

            function multiplication (z, w) {
                var v = {};
                v.a = z.a * w.a - z.b * w.b;
                v.b = z.a * w.b + z.b * w.a;
                
                return v;
            }
            
            function division(z, w) {
                var v = {};
                v.a = (z.a * w.a + z.b * w.b) / (w.a * w.a + w.b * w.b);
                v.b = (z.b * w.a - z.a * w.b) / (w.a * w.a + w.b * w.b);
                
                return v;
            }
            
            function complexmath() {
                var z =  {};
                var w =  {};
                var v =  {};
                
                z.a = Number(document.getElementById("a1").value);
                z.b = Number(document.getElementById("b1").value);
                w.a = Number(document.getElementById("a2").value);
                w.b = Number(document.getElementById("b2").value);
                
                v = addition(z,w);
                document.getElementById("addition").innerHTML = "z+w="+ v.a + "+" + v.b + "<i>i</i>";
                v = subtraction(z,w);
                document.getElementById("subtraction").innerHTML = "z-w="+ v.a + "+" + v.b + "<i>i</i>";
                v = multiplication(z,w);
                document.getElementById("multiplication").innerHTML = "z*w="+ v.a + "+" + v.b + "<i>i</i>";
                v = division(z,w);
                document.getElementById("division").innerHTML = "z/w="+ v.a + "+" + v.b + "<i>i</i>";
            }