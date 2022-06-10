function prep(str) {
    let newArr = str.split("(").join(")").split(")")
   a = []
    a.unshift(newArr[0])
    a.push("<ul>")
    a.unshift("<p>")
    aa = a.join()
   b = []
    var answers = newArr[1].split(",")
    b.unshift(answers)
    answers.unshift("<li>")
    answers.push("</li>")
    answers.splice(2, 0, "</li>")
    answers.splice(3, 0, "<li>")
    answers.splice(5, 0, "</li>")
    answers.splice(6, 0, "<li>")
    answers.splice(4, 0, "<button class=>")
    answers.splice(1, 0, "<button class=>")
    answers.splice(9, 0, "<button class=>")
    answers.splice(11, 0, "</button>") 
    answers.splice(7, 0, "</button>")    
    answers.splice(3, 0, "</button>")    
    bb = b.join()
   c = []
    c.unshift(newArr[2])
    c.unshift("</ul>")
    c.push("</p>")
    cc = c.join()
        newerArr = [aa, bb, cc]
        newerArr.unshift("<li>")
        newerArr.push("</li>")
        newestArr = newerArr.join()
        newestArr = newestArr.replaceAll(",", "");
           return newestArr 
}

console.log(prep("What’s that you’ve (kept off, covered up, got on)? I’ve never seen a piece of clothing like that before."))