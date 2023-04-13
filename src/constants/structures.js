export function EmptyLine() {
  this.characters = [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
}

export function newCharacter() {
  return [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

export function EmptyDocument() {
  this.lines = [
    {
      characters: [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    },
  ];
}

export const demoFile = {
  documents: [
    { 
      lines: [
        { 
          characters: [
            [1, 1, 6, 6, 1, 6, 6, 1, 6, 6, 1, 6, 6, 1]
          ] 
        }
      ] 
    },
  ],
};
