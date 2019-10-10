window.addEventListener('DOMContentLoaded', function() {

    class Options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createNewDiv(anytext) {
            let newDiv = document.createElement('div');
            newDiv.innerHTML = `<p>${anytext}</p>`;
            newDiv.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
            document.body.prepend(newDiv);
        }
    }

    let obj = new Options(50, 75, 'red', 15, 'center');
    let obj2 = new Options(50, 1154, 'green', 15, 'center');
    obj.createNewDiv('Привет');
    obj2.createNewDiv('Пр234ивет');
});