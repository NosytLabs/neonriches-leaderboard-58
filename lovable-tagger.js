
// Mock implementation for lovable-tagger
exports.componentTagger = function() {
  return {
    name: 'lovable-component-tagger',
    transform(code, id) {
      return code;
    }
  };
};
