import { log } from "node:console";
import { TokenType } from "../token/token";
import { Tokenizer } from "./lexer";

test("test nextToken()", function () {
  const input = "=+(){},;";

  const tokens = [
    TokenType.Assign,
    TokenType.Plus,
    TokenType.Lparen,
    TokenType.Rparen,
    TokenType.Lbrace,
    TokenType.Rbrace,
    TokenType.Comma,
    TokenType.Semicolon,
    TokenType.Eof,
    // TokenType.Function,
    // TokenType.Ident,
    // TokenType.Illega,
    // TokenType.Int,
    // TokenType.Let,
  ];

  const lexer = new Tokenizer(input);

  tokens.forEach((token) => {
    const kind = lexer.nextToken().kind;
    expect(kind).toBe(token);
  });
});
