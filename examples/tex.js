import TeXToSVG from "tex-to-svg";

const myTeXEquation = "\\frac{n!}{k!(n-k)!} = \\binom{n}{k}";

const options = {
    width: 1280,
    ex: 8,
    em: 16,
};

const SVGEquation = TeXToSVG(myTeXEquation, options);

var parser = new DOMParser();
var htmlDoc = parser.parseFromString(SVGEquation, "text/html");

const gg = htmlDoc.querySelectorAll("path");
const qq = [];
for (let i = 0; i < gg.length; i++) {
    qq.push(gg[i].getAttribute("d"));
}
console.log(qq);
