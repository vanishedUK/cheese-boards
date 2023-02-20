const {User, Board, Cheese} = require('./models/index');
const {sequelize} = require('./db');

beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the 
    // test suite is run
    await sequelize.sync({ force: true });
});

  describe('User model', () => {
    test('Create a new user', async () => {
      const user = await User.create({ name: 'John', email: 'john@example.com' });
      expect(user.name).toBe('John');
      expect(user.email).toBe('john@example.com');
    });
  
    test('Find all users', async () => {
      const users = await User.findAll();
      expect(users.length).toBeGreaterThan(0);
    });
  });
  
  describe('Board model', () => {

    test('Create a new board', async () => {
      const board = await Board.create({ type: 'chess', description: 'A classic board game', rating: 5 });
      expect(board.type).toBe('chess');
      expect(board.description).toBe('A classic board game');
      expect(board.rating).toBe(5);
    });
  
    test('Find all boards', async () => {
      const boards = await Board.findAll();
      expect(boards.length).toBeGreaterThan(0);
    });
  });
  
  describe('Cheese model', () => {
    test('Create a new cheese', async () => {
      const cheese = await Cheese.create({ title: 'Cheddar', description: 'A popular cheese' });
      expect(cheese.title).toBe('Cheddar');
      expect(cheese.description).toBe('A popular cheese');
    });
  
    test('Find all cheeses', async () => {
      const cheeses = await Cheese.findAll();
      expect(cheeses.length).toBeGreaterThan(0);
    });
  });