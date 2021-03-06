const { exec } = require('./utils/executionHelpers');
const CompilationFailedError = require('./errors/compilationFailed');

/**
 * Compiles C/C++ source.
 * @param {string} compilerName Compiler to use.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<inputFile></inputFile>}
 */
function compileWith(compilerName, inputFile, outputFile, link = true) {
  const command = `${compilerName} ${inputFile} -o ${outputFile}${link ? '' : '-c'}`;

  return exec(command)
    .then(() => Promise.resolve(inputFile))
    .catch(() => Promise.reject(new CompilationFailedError(compilerName, inputFile)));
}

/**
 * Compiles C/C++ source using gcc.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<inputFile>}
 */
function compileWithGcc(inputFile, outputFile, link = true) {
  return compileWith('gcc', inputFile, outputFile, link);
}

/**
 * Compiles C/C++ source using g++.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<inputFile>}
 */
function compileWithGPlus(inputFile, outputFile, link = true) {
  return compileWith('g++', inputFile, outputFile, link);
}

/**
 * Compiles C/C++ source using clang.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<inputFile>}
 */
function compileWithClang(inputFile, outputFile, link = true) {
  return compileWith('clang', inputFile, outputFile, link);
}

/**
 * Compiles C/C++ source using clang++.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<inputFile>}
 */
function compileWithClangPlus(inputFile, outputFile, link = true) {
  return compileWith('clang++', inputFile, outputFile, link);
}

module.exports = {
  compileWith,
  compileWithGcc,
  compileWithGPlus,
  compileWithClang,
  compileWithClangPlus,
};
