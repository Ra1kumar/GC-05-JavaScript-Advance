// Show guide
document.write("CODE GUIDE:<br>");
document.write("1a = meter → foot<br>");
document.write("1b = foot → meter<br>");
document.write("2a = centimeter → inch<br>");
document.write("2b = inch → centimeter<br>");
document.write("3a = cubic meter → liter<br>");
document.write("3b = liter → cubic meter<br>");
document.write("4a = square foot → acre<br>");
document.write("4b = acre → square foot<br><br><br>");

// Take input in single line: e.g., "1a 1"
let input = prompt("Enter code and value (e.g., 1a 1):");

let parts = input.split(" ");
let code = parts[0].toLowerCase();
let value = parseFloat(parts[1]);

let answer;

// Conversion logic
switch (code) {
    case "1a": answer = value * 3.281; break;
    case "1b": answer = value / 3.281; break;

    case "2a": answer = value / 2.54; break;
    case "2b": answer = value * 2.54; break;

    case "3a": answer = value * 1000; break;
    case "3b": answer = value / 1000; break;

    case "4a": answer = value / 1076.391; break;
    case "4b": answer = value * 1076.391; break;

    default:
        document.write("Invalid Code");
        return;
}

// Output final converted value
document.write("<br><br>Output:<br>");
document.write(answer);
