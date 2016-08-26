// Controller is called when ng-controller is declared
function FilteringController($scope){
	$scope.company = 0;
	$scope.game = null;
	// mock JSON data
	$scope.companies = [
		{
			id: 0,
			business: 'EASports',
			games: [
				'Battlefield',
				'Crysis',
				'Madden NFL',
				'Mass Effect'
			],
			enable: true
		},
		{
			id: 1,
			business: 'Epic Games',
			games: [
				'Unreal',
				'Unreal 2',
				'Unreal 3',
				'Infinity Blade'
			],
			enable: true
		},
		{
			id: 2,
			business: 'LucasArts',
			games: [
				'Star Wars: KOR',
				'Star Wars: TOR'
			],
			enable: true
		},
		{
			id: 3,
			business: 'Blizzard',
			games: [
				'Diablo',
				'Starcraft',
				'WoW'
			],
			enable: false
		},
		{
			id: 4,
			business: 'Nintendo',
			games: [
				'Super Mario',
				'Zelda',
				'Pokemon'
			],
			enable: false
		}
	];
}