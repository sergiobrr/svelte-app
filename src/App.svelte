<script>
	import NuanceGrid from "./Nagger/Nuance/NuanceGrid.svelte";
	import BigHeroWithLinks from "./UI/BigHeroWithLinks.svelte";
	import MainNavbar from "./UI/MainNavbar.svelte";
	import NuanceForm from "./Nagger/Nuance/NuanceForm.svelte";

	let heroTitle = 'Infastidisci chi detesti!';
	let heroSubTitle = 'Digli che non vuoi sapere cosa pensano...';
	let link1 = '#nuance-list';
	let link1Text = 'Guarda i potenziali nemici ;-D';
	let link2 = '#new-nuance';
	let link2Text = 'Crea un gruppo';
	let nuances = [
		{
			id: 'n1',
			name: 'Amici di Fiorello',
			subtitle: 'Quelli che guardano la tv',
			descrizione: 'Individuare quelli che seguono la trasmissione',
			componenti: ['Fiorello', 'Il gabibbo'],
			fondatore: 'Zino Zani',
			email: 'zino@zani.com',
			creato: '23/04/2019',
			logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI74-HyanJa4kp4ysCc9ejaNNnbV86pEFFli9tgd27LmoCxuYj&s'
		},
		{
			id: 'n2',
			name: 'Destroidi',
			subtitle: 'Quelli che razzano',
			descrizione: 'Individuare quelli che sono razzisti',
			componenti: ['Salvini', 'Meloni', 'Fiori'],
			fondatore: 'Zino Zani',
			email: 'zino@zani.com',
			creato: '23/08/2019',
			logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI74-HyanJa4kp4ysCc9ejaNNnbV86pEFFli9tgd27LmoCxuYj&s'
		},
		{
			id: 'n3',
			name: 'Amici di Trump',
			subtitle: 'Quelli che gli piace trump',
			descrizione: 'Individuare quelli votano a destra un us',
			componenti: ['The donald', 'Steve Bannon'],
			fondatore: 'Licia Laccia',
			email: 'licia@mentre.noi',
			creato: '2/10/2019',
			logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI74-HyanJa4kp4ysCc9ejaNNnbV86pEFFli9tgd27LmoCxuYj&s'
		},
	];
	let newNuance = null;
	function handleAddNuance(event) {
		nuances = [event.detail.nuance, ...nuances];
	}
</script>

<style>
	.textarea {
		min-height: 40px;
	}
</style>

<MainNavbar/>
<BigHeroWithLinks {heroTitle} {heroSubTitle}
										{link1} {link1Text}
										{link2} {link2Text}>
</BigHeroWithLinks>
<div class="container is-fluid">
	<NuanceForm on:addnuance={ handleAddNuance }>
	</NuanceForm>
	<NuanceGrid {nuances}>
	</NuanceGrid>
</div>
