import { Token, TokenType, createToken } from "../token/token";

export class Tokenizer {
  private postion: number = 0;
  private readPosition: number = 0;
  private char: string = "";

  constructor(private input: string) {
    this.readChar();
  }

  /** @throws {Error} */
  public nextToken(): Token {
    let tok: Token;
    switch (this.char) {
      case "=":
        tok = createToken(TokenType.Assign, this.char);
        break;
      case ";":
        tok = createToken(TokenType.Semicolon, this.char);
        break;
      case "(":
        tok = createToken(TokenType.Lparen, this.char);
        break;
      case ")":
        tok = createToken(TokenType.Rparen, this.char);
        break;
      case ",":
        tok = createToken(TokenType.Comma, this.char);
        break;
      case "+":
        tok = createToken(TokenType.Plus, this.char);
        break;
      case "{":
        tok = createToken(TokenType.Lbrace, this.char);
        break;
      case "}":
        tok = createToken(TokenType.Rbrace, this.char);
        break;
      case "\0":
        tok = createToken(TokenType.Eof, "");
        break;
      default:
        throw new Error("unhandled token");
    }

    this.readChar();
    return tok;
  }

  private readChar(): void {
    if (this.readPosition >= this.input.length) {
      this.char = "\0";
    } else {
      this.char = this.input[this.readPosition];
    }
    this.postion = this.readPosition;
    this.readPosition += 1;
  }
}
