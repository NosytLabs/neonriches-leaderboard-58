
// Mock implementation of the componentTagger
export const componentTagger = () => {
  return {
    name: 'component-tagger',
    transform(code: string, id: string) {
      return code;
    }
  };
};

export default componentTagger;
