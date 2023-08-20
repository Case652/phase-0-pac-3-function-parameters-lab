function introduction(Name) {
    return String(`Hi, my name is ${Name}.`);
  }
  introduction(`Aki`)
    
  function introductionWithLanguage(Name, language) {
    return String(`Hi, my name is ${Name} and I am learning to program in ${language}.`);
  }
  introductionWithLanguage(`Aki`, `Ember.js`)
  function introductionWithLanguageOptional(Name, language = "JavaScript") {
    return String(`Hi, my name is ${Name} and I am learning to program in ${language}.`);
  }
  introductionWithLanguageOptional(`Gracie`, `JavaScript`)