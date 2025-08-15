pub enum TokenType {
    Illegal,
    Eof,
    Ident(String),
    Int(Sring),
    Assign(String),
    Plus(String),
    Comma(String),
    Semicolon(String),
    Lparen(String),
    Rparen(String),
    Lbrace(String),
    Rbrace(String),
    Function(String),
    Let(String),
}

pub struct Token {
    pub kind: TokenType,
    pub literal: String,
}
