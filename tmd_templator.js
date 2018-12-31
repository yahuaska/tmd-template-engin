class TElement {
    constructor(tag, attributes) {
        let args = [];
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i]) {
                args.push(arguments[i]);
            }
        }
        this.tag = args.shift();
        this.attributes = {};
        if (typeof(args[0]) === "object" && !(Array.isArray(args[0]))) {
            this.attributes = args.shift();
        }
        this.children = [];

        args.forEach((el) => {
            if (typeof(el) === "string") {
                this.children.push(new TextNode(el));
            } else {
                el.unshift(null);
                this.children.push(
                    new (Function.prototype.bind.apply(TElement, el))
                )
            }
        })

    }

    render() {
        let el = document.createElement(this.tag);
        for (let attr in this.attributes) {
            if (this.attributes.hasOwnProperty(attr)) {
                el.setAttribute(attr, this.attributes[attr]);
            }
        }
        this.children.forEach((child) => {
           el.appendChild(child.render());
        });

        return el;
    }
}

class TextNode {
    constructor(text) {
        this.text = text;
    }

    render() {
        return document.createTextNode(this.text);
    }
}