let sentenceBuilder = {
    subject: "The cat",
    verb: "is",
    object: "coding",
    buildSentence: function () {
        return this.subject && this.verb && this.object ? `${this.subject} ${this.verb} ${this.object}` : "Incomplete Sentence"
    },
    updateProperty: function (property, value) {
        return ["subject", "verb", "object"].includes(property)
            ? (this[property] = value)
            : console.log("Invalid property");
    },
}

sentenceBuilder.updateProperty("verb", "running");
console.log(sentenceBuilder.buildSentence()); 