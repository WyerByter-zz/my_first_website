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
