export default class CompilerNotFoundError extends Error {
  /**
   * CompilerNotFound Error constructor
   * @param {string} compilerName The name of the compiler that wasn't found.
   */
  constructor(compilerName: string) {
    super(`Compiler ${compilerName} was not found`);
  }
}
