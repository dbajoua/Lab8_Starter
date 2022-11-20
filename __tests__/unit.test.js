// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// 4 tests for function isPhoneNumber
test('matches valid phone numbers: 760-222-3344', () => {
    expect(functions.isPhoneNumber('760-222-3344')).toBeTruthy();
});

test('matches valid phone numbers: (760) 222-3344', () => {
    expect(functions.isPhoneNumber('(760) 222-3344')).toBeTruthy();
});

test('matches valid phone numbers: 760', () => {
    expect(functions.isPhoneNumber(760)).toBeFalsy();
});

test('matches valid phone numbers: abc', () => {
    expect(functions.isPhoneNumber('abc')).toBeFalsy();
});

// 4 tests for function isEmail
test('matches valid emails: Apple@ucsd.edu', () => {
    expect(functions.isEmail('Apple@ucsd.edu')).toBeTruthy();
});

test('matches valid emails: banana@ucsd.edu', () => {
    expect(functions.isEmail('banana@ucsd.edu')).toBeTruthy();
});

test('matches valid emails: 123', () => {
    expect(functions.isEmail('123')).toBeFalsy();
});

test('matches valid emails: happy@ucsd', () => {
    expect(functions.isEmail('happy@ucsd')).toBeFalsy();
});

// 4 tests for function isStrongPassword
test('checks for a strong password: Abcd_123', () => {
    expect(functions.isStrongPassword('Abcd_123')).toBeTruthy();
});

test('checks for a strong password: Abcdefghijk_123', () => {
    expect(functions.isStrongPassword('Abcdefghijk_123')).toBeTruthy();
});

test('checks for a strong password: ____', () => {
    expect(functions.isStrongPassword('____')).toBeFalsy();
});

test('checks for a strong password: 12345', () => {
    expect(functions.isStrongPassword('12345')).toBeFalsy();
});

// 4 tests for function isDate
test('checks for a valid date: 1/2/2023', () => {
    expect(functions.isDate('1/2/2023')).toBeTruthy();
});

test('checks for a valid date: 11/22/2023', () => {
    expect(functions.isDate('11/21/2023')).toBeTruthy();
});

test('checks for a valid date: 11/22/23', () => {
    expect(functions.isDate('11/22/23')).toBeFalsy();
});

test('checks for a valid date: 11.22.2023', () => {
    expect(functions.isDate('11/22/23')).toBeFalsy();
});

// 4 tests for function isHexCode
test('matches hex color: 34568B', () => {
    expect(functions.isHexColor('34568B')).toBeTruthy();
});

test('matches hex color: 45B8AC', () => {
    expect(functions.isHexColor('45B8AC')).toBeTruthy();
});

test('matches hex color: 1-2-3', () => {
    expect(functions.isHexColor('1-2-3')).toBeFalsy();
});

test('matches hex color: aaabbbccc', () => {
    expect(functions.isHexColor('aaabbbccc')).toBeFalsy();
});