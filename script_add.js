/* а) Используйте прототипное наследование.
б) Базовый класс должен состоять из минимум 6 различных свойств.
в) Каждый класс - наследник должен расширять базовый класс и включать два или более дополнительных свойства.
г) Каждый класс - наследник должен унаследовать как минимум 1 метод из родительского класса. Также добавьте по одному уникальному методу каждому классу наследнику.


Класс «Растение». Наследуемые классы: папоротник и ель обыкновенная. Возможные поля: название, описание, вид, возраст, класс, размер соцветия, класс опасности, ареал произрастания, область применения (в пищевой промышленности, в получении лекарственных препаратов, в сельском хозяйстве...), первооткрыватель, место произрастания и т.д. */

function Plant(name, description, view, year, nameClass, size){
    this.name = name; 
    this.description = description;
    this.view = view;
    this.year = year;
    this.nameClass = nameClass;
    this.size = size;
}

Plant.prototype.getNameDescription = function(){
    return this.description;
}

Plant.prototype.getNameSize = function(){
    return this.name + ' размер соцветия равен: ' + this.size;
}

var plant = new Plant('rose', 'common white rose', 'common', '2 weeks', 'secondClass', '7 sm');

console.log(plant.getNameDescription());
console.log(plant.getNameSize());



function Tree(name, description, view, year, nameClass, size, classDangerous, place){
    Plant.call(this, name, description, view, year, nameClass, size);
    this.classDangerous = classDangerous;
    this.place = place;
}

Tree.prototype = Object.create(Plant.prototype);

Tree.prototype.getClassDangerous = function(){
    return this.classDangerous;
}

var tree = new Tree('Birch', 'common birch', 'common', '10 years', 'firstClass', '4 sm', 2, 'Europe');


console.log(tree.getClassDangerous());

console.log(tree.getNameSize());



function Bush(name, description, view, year, nameClass, size, applicationArea){
    Plant.call(this, name, description, view, year, nameClass, size);
    this.applicationArea = applicationArea;
}

Bush.prototype = Object.create(Plant.prototype);

Bush.prototype.getNameApplicationArea = function(){
    return this.name + ' ' + this.applicationArea;
}

var bush = new Bush('Buckthorn', 'buckthorn alder', 'alder', '2 years', 'secondClass', '15 sm', 'Europe');

console.log(bush.getNameApplicationArea());
console.log(bush.getNameDescription());

