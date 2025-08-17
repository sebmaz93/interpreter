export const TokenType = {
  Illega: "ILLEGAL",
  Eof: "EOF",
  Ident: "IDENT",
  Int: "INT",
  Assign: "=",
  Plus: "+",
  Comma: ",",
  Semicolon: ",",
  Lparen: "(",
  Rparen: ")",
  Lbrace: "{",
  Rbrace: "}",
  Function: "FUNCTION",
  Let: "LET",
} as const;

type TokenItem = (typeof TokenType)[keyof typeof TokenType];

export type Token = {
  kind: TokenItem;
  literal: string;
};

export function createToken(kind: TokenItem, literal: string): Token {
  return { kind, literal };
}
