const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());
//
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

//
// const initDatabase = () => console.log('Database Initialize...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name ...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('User is karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});


test('Add function should exist', () => {
    expect(functions.add()).toBeDefined();
});

test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 + 2 to NOT EQUAL 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

//OBJECTS
test('User should be Bijay Shrestha', () => {
    expect(functions.createUser()).toStrictEqual({firstName: 'Bijay', lastName: 'Shrestha'});
});

//LESS THAN AND GREATER THAN
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//REGEX
test('There is no I in team', () => {
    expect('teami').not.toMatch(/I/);
});

//ARRAYS
test('Admin should be in username', () => {
    const usernames = ['bijay', 'bishow', 'sabi', 'sarala', 'binod'];
    expect(usernames).toContain('bijay');
});

//WORKING WITH ASYNC DATA [PROMISE]
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => expect(data.name).toEqual('Leanne Graham'));
});

//ASYNC
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});

//CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treates as true
// toBeFalsy matches anything that an if statement treats as false
// toBeLessThan matches anything that is less than

