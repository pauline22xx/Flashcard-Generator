function ClozeCard(text, cloze){
    if(!this instanceof ClozeCard){
        return new ClozeCard(text, cloze);
    }
    this.cardType = 'Cloze',
    this.answer = cloze,
    this.fulltext = text,
    this.question = text.replace( cloze, '____________')
}

module.exports = ClozeCard;
