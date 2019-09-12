
 // a model is just a blueprint for objects we create.

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {  //this gives the ability to use 'new' to create new instances of this class
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }

}

// Defining how the recipe should appear. This model will be the TYPE we define recipes as in the model