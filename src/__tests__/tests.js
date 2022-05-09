import Team from '../Team';

test('testing add method', () => {
  const team = new Team();
  const bowman = {
  	name: 'Kolya'
  };
  team.add(bowman);

  expect(team.members.has(bowman)).toEqual(true);
});

test('testing addAll method', () => {
	const team = new Team();
	const bowman = {
  	  name: 'Kolya'
    };
    const knight = {
  	  name: 'Kolya'
    };
    const undead = {
  	  name: 'Kolya'
    };
	const characters = [bowman, knight, undead];

	team.addAll(...characters);

	expect(team.members.has(bowman) && team.members.has(knight) && team.members.has(undead)).toEqual(true);
})