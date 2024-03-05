class JoshyTea {
    constructor() {
      this.teaData = {};
    }
  
    setTeaData(key, value) {
      this.teaData[key] = value;
    }
  
    getTeaData(key) {
      const value = this.teaData[key];
      console.log(`Retrieved Joshy Tea data for key '${key}':`, value);
      return value;
    }
  
    brewTea() {
      console.log('Brewing a delightful cup of Joshy Tea. ☕🌈');
    }
  
    customizeBlend(blend) {
      console.log(`Customizing Joshy Tea blend with ${blend}.`);
    }
  
    addJoyfulIngredient(ingredient) {
      console.log(`Adding a joyful touch of ${ingredient} to elevate the spirit of Joshy Tea.`);
    }
  
    enjoyTea() {
      console.log('Sipping on the joyful flavor of Joshy Tea. 😊🍵');
    }
  }
  
  // Example usage:
  const joshyTea = new JoshyTea();
  
  joshyTea.setTeaData('flavor', 'Joyful Fusion');
  joshyTea.setTeaData('aroma', 'Elevating Essence');
  joshyTea.brewTea();
  joshyTea.customizeBlend('Sunny Citrus');
  joshyTea.addJoyfulIngredient('Happiness Drops');
  joshyTea.enjoyTea();
  