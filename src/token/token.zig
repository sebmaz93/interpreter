const TokenType = enum {
    Illegal,
    Eof,
    Ident,
    Int,
    Assign,
    Plus,
    Comma,
    Semicolon,
    Lparen,
    Rparen,
    Lbrace,
    Rbrace,
    Function,
    Let,
};

pub const Token = struct {
    kind: TokenType,
    literal: []const u8,
};
