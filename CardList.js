
//класс addCard создающий карточку 
class CardList {
  constructor(card, container) {
  this.card=card;
  this.container=container;
  }
  // Надо исправить : Нельзя вызывать или создавать реализацию в конструторе класса
  // Вызывая реализацию в конструторе класса, при наследовании, вы не сможите вызвать другой метод не вызвав реализацию в конструкторе
  // Если Вам необходимо будет вызвать конструктор родителя при наследовании в одном из классов
  // так же, вы заведомо делаете класс не тестируемым, так как всегда при инициализации будет вызываться конструктор класса

  addCard(name, link) {
   
    /** Надо исправить: вы обращаетесь в классе к переменной card объявленной глобально,
    так делать нельзя. Вы можете передать эту переменную в качестве параметров, а потом уже обращаться к ней 
    Стремитесь к тому чтобы класс у вас был самодостаточным, и не зависел от глобальных переменных или классов 
    объявленных глобально, а только от тех данных которые были переданны через параметры 
    */
    this.cards.push(this.card.create(name, link));
    container.appendChild(this.card.create(name, link));
    

    // Надо исправить: инициализируя и объявляя класс внутри другого класса вы создаёте жесткую связь между классами
    // Если проект будет достаточно большим и сложным, то замена одного класса  прописанного внутри другого класса может быть очень болезненной,
    // Лучше передавайте класс в качестве параметра при объявлении.
    // Как пример:
    // Допустим у нас есть класс A, просто объявляем его
    // const classA = new A();
    // Есть второй класс B при объявлении которого вы передаёте класс А
    // const classB = new B(classA);
    // В классе B вы используете методы класса А 

    //добавляем в контейнер с карточками 
    // Нет смысла в этом массиве, хранить массив карточек нет смысла, вы его не используете всё ровно

  }
  //перебор массива для создания 10 карточек при загрузке страницы
  render(container, cards) {
    this.container = container;
    this.cards = cards;
 
    this.cards.forEach((item) => this.addCard(item.name, item.link));
    
  }

};


