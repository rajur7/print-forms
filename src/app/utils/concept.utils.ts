export class ConceptUtils {

  public static isTabular(concept) {
    const config = concept.config;
    if (config) {
      if (config.isTabular) {
        return config.isTabular;
      }
    }
    return false;
  }
}
