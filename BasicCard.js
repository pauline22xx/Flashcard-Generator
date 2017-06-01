function BasicCard(front, back){
  if(!this instanceof BasicCard){
      return new BasicCard(front, back);
  }
  this.cardType = 'Basic',
  this.question = front,
  this.answer = back
}

module.exports = BasicCard;

